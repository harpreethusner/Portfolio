import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'
import type { PersonDetails } from '../data/siteData'

type Props = {
  person: PersonDetails
}

export function Hero({ person }: Props) {
  return (
    <section id="home" className="relative overflow-hidden py-16 sm:py-20">
      {/* Decorative gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 size-80 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute -right-24 top-24 size-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-[600px_1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mx-auto w-full max-w-[600px]"
          >
            <div className="rounded-3xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={person.profilePictureUrl}
                  alt={`${person.fullName} profile`}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
              className="inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-sm text-zinc-300 ring-1 ring-white/10"
            >
              {person.role}
              
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
              className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              {person.fullName}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg"
            >
              {person.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#portfolio"
                className="focus-ring inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 font-medium text-zinc-950 transition hover:brightness-110"
              >
                View Portfolio
              </a>
              <a
                href={`mailto:${person.emailAddress}`}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-5 py-3 font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <FaEnvelope className="text-zinc-200" />
                Email
              </a>
              <a
                href={`tel:${person.mobileNumber.replace(/\s/g, '')}`}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-5 py-3 font-medium text-white ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <FaPhone className="text-zinc-200" />
                Call
              </a>
            </motion.div>

            <div className="mt-6 grid gap-2 text-sm text-zinc-300 sm:grid-cols-2">
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-zinc-400">Mobile</div>
                <div className="mt-1 font-medium text-zinc-100">
                  {person.mobileNumber}
                </div>
              </div>
              <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-zinc-400">Email</div>
                <div className="mt-1 truncate font-medium text-zinc-100">
                  {person.emailAddress}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



