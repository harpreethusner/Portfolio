import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaBars, FaVideo, FaXmark } from 'react-icons/fa6'

type NavLink = { label: string; href: string }

const links: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  // Close menu on hash navigation
  useEffect(() => {
    const onHashChange = () => setOpen(false)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-40 border-b border-white/5 bg-zinc-950/70 backdrop-blur"
    >
      {/* Accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/60 to-transparent" />

      <div className="container mx-auto flex h-16 items-center justify-between">
        <a
          href="#home"
          className="focus-ring inline-flex items-center gap-2 rounded-lg px-2 py-1"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 ring-1 ring-white/10">
            <FaVideo className="text-fuchsia-200" />
          </span>
          <span className="font-semibold tracking-tight">Bhavuk garg</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring rounded-lg px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="focus-ring hidden items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm text-white ring-1 ring-white/10 transition hover:bg-white/10 sm:inline-flex"
          >
            Let’s Talk
            <span className="inline-flex size-2 rounded-full bg-emerald-400" />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="focus-ring inline-flex items-center justify-center rounded-xl bg-white/5 p-2 text-zinc-100 ring-1 ring-white/10 transition hover:bg-white/10 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden"
          >
            <div className="container mx-auto pb-4">
              <div className="mt-3 grid gap-2 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="focus-ring rounded-xl px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/10"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="focus-ring mt-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:brightness-110"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}


