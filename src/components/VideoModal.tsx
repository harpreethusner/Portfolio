import { AnimatePresence, motion } from 'framer-motion'
import { FaXmark } from 'react-icons/fa6'
import type { PortfolioVideo } from '../data/siteData'
import { useEscapeKey } from '../hooks/useEscapeKey'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { getYouTubeEmbedUrl } from '../lib/youtube'

type Props = {
  open: boolean
  video: PortfolioVideo | null
  onClose: () => void
}

export function VideoModal({ open, video, onClose }: Props) {
  useLockBodyScroll(open)
  useEscapeKey(onClose, open)

  return (
    <AnimatePresence>
      {open && video ? (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-hidden={!open}
        >
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 cursor-pointer bg-black/70"
            onClick={onClose}
            aria-label="Close video modal"
          />

          {/* Dialog */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ y: 12, scale: 0.98, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 12, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full max-w-4xl overflow-hidden rounded-2xl bg-zinc-950 ring-1 ring-white/10"
            >
              <div className="flex items-center justify-between gap-4 border-b border-white/10 p-4">
                <div className="min-w-0">
                  <div className="truncate text-base font-semibold text-zinc-100">
                    {video.title}
                  </div>
                  <div className="mt-1 text-sm text-zinc-400">
                    Category: {video.category}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="focus-ring inline-flex items-center justify-center rounded-xl bg-white/5 p-2 text-zinc-200 ring-1 ring-white/10 transition hover:bg-white/10"
                  aria-label="Close"
                >
                  <FaXmark className="text-xl" />
                </button>
              </div>

              <div className="p-4">
                {/* 16:9 responsive player */}
                <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={getYouTubeEmbedUrl(video.youtubeUrl, {
                      autoplay: true,
                      controls: 1,
                      rel: 0,
                    })}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}



