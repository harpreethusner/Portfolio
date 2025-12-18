import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { FaCheck, FaCopy, FaEnvelope, FaPhone } from 'react-icons/fa6'
import type { PersonDetails } from '../data/siteData'

type Props = {
  person: PersonDetails
}

export function Contact({ person }: Props) {
  const [copied, setCopied] = useState<'phone' | 'email' | null>(null)

  const phoneForTel = useMemo(
    () => person.mobileNumber.replace(/[^\d+]/g, ''),
    [person.mobileNumber],
  )

  async function copy(text: string, kind: 'phone' | 'email') {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(kind)
      window.setTimeout(() => setCopied((v) => (v === kind ? null : v)), 1200)
    } catch {
      // Clipboard may be blocked; ignore gracefully.
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/10"
        >
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-24 -top-24 size-80 rounded-full bg-fuchsia-500/15 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 size-80 rounded-full bg-cyan-400/10 blur-3xl" />
          </div>

          <div className="p-6 sm:p-10">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Let’s work together
            </h2>
            <p className="mt-2 max-w-2xl text-zinc-300">
              Share your content style + references. I’ll reply with a quick plan, timeline,
              and next steps.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="grid size-11 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                        <FaPhone className="text-zinc-100" />
                      </span>
                      <div>
                        <div className="text-sm text-zinc-400">Mobile</div>
                        <div className="mt-0.5 font-semibold text-zinc-100">
                          {person.mobileNumber}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => copy(person.mobileNumber, 'phone')}
                      className="focus-ring inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm font-medium text-zinc-100 ring-1 ring-white/10 transition hover:bg-white/10"
                    >
                      {copied === 'phone' ? <FaCheck /> : <FaCopy />}
                      {copied === 'phone' ? 'Copied' : 'Copy'}
                    </button>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a
                      href={`tel:${phoneForTel}`}
                      className="focus-ring inline-flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:brightness-110"
                    >
                      Call now
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="grid size-11 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                        <FaEnvelope className="text-zinc-100" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm text-zinc-400">Email</div>
                        <div className="mt-0.5 truncate font-semibold text-zinc-100">
                          {person.emailAddress}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => copy(person.emailAddress, 'email')}
                      className="focus-ring inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm font-medium text-zinc-100 ring-1 ring-white/10 transition hover:bg-white/10"
                    >
                      {copied === 'email' ? <FaCheck /> : <FaCopy />}
                      {copied === 'email' ? 'Copied' : 'Copy'}
                    </button>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a
                      href={`mailto:${person.emailAddress}`}
                      className="focus-ring inline-flex flex-1 items-center justify-center rounded-xl bg-white/5 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/10 transition hover:bg-white/10"
                    >
                      Email me
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: 0.05 }}
              className="mt-8 flex flex-wrap items-center gap-3 text-sm text-zinc-300"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">
                <span className="inline-flex size-2 rounded-full bg-emerald-400" />
                Typically replies within 24 hours
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10">
                Best for YouTube • Shorts/Reels • Ads
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


