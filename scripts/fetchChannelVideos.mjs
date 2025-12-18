/**
 * Helper script (optional): fetch a list of video ids from a YouTube channel page
 * and enrich them via the public oEmbed endpoint (title + thumbnail).
 *
 * Run:
 *   node scripts/fetchChannelVideos.mjs
 */

const CHANNEL_VIDEOS_URL = 'https://www.youtube.com/@ListenUpMusicOfficial/videos'

const alreadyUsed = new Set([
  'M6xrUMIGJUE',
  'B4asIglcAHs',
  'bO3VFGygWyk',
  'lGWrJ2ReBhc',
])

function uniq(arr) {
  return [...new Set(arr)]
}

async function getOEmbed(id) {
  const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
  const res = await fetch(url, { redirect: 'follow' })
  if (!res.ok) throw new Error(`oEmbed failed for ${id}: ${res.status}`)
  return res.json()
}

async function main() {
  const html = await (await fetch(CHANNEL_VIDEOS_URL, { redirect: 'follow' })).text()

  const ids = uniq(
    [...html.matchAll(/"videoId":"([A-Za-z0-9_-]{11})"/g)].map((m) => m[1]),
  ).filter((id) => !alreadyUsed.has(id))

  const picked = ids.slice(0, 6)
  const enriched = []

  for (const id of picked) {
    // eslint-disable-next-line no-await-in-loop
    const data = await getOEmbed(id)
    enriched.push({
      id,
      title: data.title,
      youtubeUrl: `https://www.youtube.com/watch?v=${id}`,
      thumbnailUrl: data.thumbnail_url,
      category: 'YouTube',
    })
  }

  console.log(JSON.stringify(enriched, null, 2))
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})



