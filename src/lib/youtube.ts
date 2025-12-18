type EmbedOptions = {
  autoplay?: boolean
  mute?: boolean
  controls?: 0 | 1
  rel?: 0 | 1
}

/**
 * Extracts the YouTube video id from common URL formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/shorts/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 */
export function getYouTubeVideoId(youtubeUrl: string): string | null {
  try {
    const url = new URL(youtubeUrl)

    // youtu.be/VIDEO_ID
    if (url.hostname === 'youtu.be') {
      const id = url.pathname.replace('/', '').trim()
      return id || null
    }

    // youtube.com/watch?v=VIDEO_ID
    const v = url.searchParams.get('v')
    if (v) return v

    // youtube.com/shorts/VIDEO_ID or /embed/VIDEO_ID
    const parts = url.pathname.split('/').filter(Boolean)
    const shortsIdx = parts.indexOf('shorts')
    if (shortsIdx !== -1 && parts[shortsIdx + 1]) return parts[shortsIdx + 1]

    const embedIdx = parts.indexOf('embed')
    if (embedIdx !== -1 && parts[embedIdx + 1]) return parts[embedIdx + 1]

    return null
  } catch {
    return null
  }
}

export function getYouTubeEmbedUrl(
  youtubeUrl: string,
  options: EmbedOptions = {},
): string {
  const id = getYouTubeVideoId(youtubeUrl)
  if (!id) return 'about:blank'

  const params = new URLSearchParams()
  params.set('rel', String(options.rel ?? 0))
  params.set('controls', String(options.controls ?? 1))
  if (options.autoplay) params.set('autoplay', '1')
  if (options.mute) params.set('mute', '1')

  return `https://www.youtube.com/embed/${id}?${params.toString()}`
}



