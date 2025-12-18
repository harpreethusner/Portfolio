import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { FaPlay } from 'react-icons/fa6'
import type { PortfolioVideo, VideoCategory } from '../data/siteData'
import { getYouTubeEmbedUrl } from '../lib/youtube'
import { VideoModal } from './VideoModal'

type Props = {
  videos: PortfolioVideo[]
}

const categories: Array<VideoCategory | 'All'> = ['All', 'YouTube', 'Shorts', 'Ads']

export function Portfolio({ videos }: Props) {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(
    'All',
  )
  const [selected, setSelected] = useState<PortfolioVideo | null>(null)

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return videos
    return videos.filter((v) => v.category === activeCategory)
  }, [activeCategory, videos])

  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Portfolio
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-300 sm:text-base">
              Selected edits across YouTube, Shorts/Reels, and Ads. Click any thumbnail
              to play.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = c === activeCategory
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActiveCategory(c)}
                  className={[
                    'focus-ring rounded-xl px-4 py-2 text-sm font-medium ring-1 transition',
                    active
                      ? 'bg-white/10 text-white ring-white/15'
                      : 'bg-white/5 text-zinc-300 ring-white/10 hover:bg-white/10 hover:text-white',
                  ].join(' ')}
                >
                  {c}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((video, idx) => (
            <motion.article
              key={video.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: Math.min(idx * 0.03, 0.12) }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-white/5 ring-1 ring-white/10 transition hover:ring-white/20"
            >
              {/* Clickable media area */}
              <div className="relative overflow-hidden rounded-2xl">
                <div className="relative aspect-video bg-zinc-900">
                  {/* Requirement: each card includes an embedded YouTube iframe (lazy-loaded). */}
                  <iframe
                    className="absolute inset-0 h-full w-full pointer-events-none"
                    src={getYouTubeEmbedUrl(video.youtubeUrl, {
                      autoplay: false,
                      mute: true,
                      controls: 0,
                      rel: 0,
                    })}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />

                  {/* Thumbnail overlay */}
                  <img
                    src={video.thumbnailUrl}
                    alt={`${video.title} thumbnail`}
                    className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-300 group-hover:opacity-65"
                    loading="lazy"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />

                  {/* Play affordance */}
                  <div className="pointer-events-none absolute inset-0 grid place-items-center">
                    <div className="grid size-14 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur transition group-hover:scale-105">
                      <FaPlay className="ml-0.5 text-lg text-white" />
                    </div>
                  </div>

                  {/* Accessible click target (keeps iframe out of the button content model) */}
                  <button
                    type="button"
                    onClick={() => setSelected(video)}
                    className="focus-ring absolute inset-0 rounded-2xl"
                    aria-label={`Play ${video.title}`}
                  />
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold leading-snug text-zinc-100">
                    {video.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 ring-1 ring-white/10">
                    {video.category}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <VideoModal open={!!selected} video={selected} onClose={() => setSelected(null)} />
    </section>
  )
}


