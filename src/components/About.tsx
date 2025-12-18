import { motion } from 'framer-motion'
import type { PersonDetails } from '../data/siteData'

type Props = {
  person: PersonDetails
}

export function About({ person }: Props) {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-10"
        >
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-[0.2em] sm:text-4xl">
              ABOUT ME
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-40 bg-gradient-to-r from-fuchsia-500 via-emerald-400 to-cyan-400" />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
            className="mx-auto mt-8 max-w-4xl text-center text-sm leading-relaxed text-zinc-300 sm:text-base"
          >
            {person.about}
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3"
          >
            {person.specialties.map((s) => (
              <motion.div
                key={s}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: { opacity: 1, y: 0 },
                }}
                className="inline-flex items-center gap-3 text-sm text-zinc-200"
              >
                <span className="inline-flex size-1.5 rounded-full bg-emerald-400" />
                <span className="font-medium">{s}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}


