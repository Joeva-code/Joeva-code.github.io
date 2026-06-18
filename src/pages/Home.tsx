import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'

const roles = ['Fullstack Developer', 'UI Engineer', 'Problem Solver', 'Tech Enthusiast']
const stack = ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind', 'Framer Motion']

function useTypewriter(words: string[], typingSpeed = 80, pause = 1600) {
  const [text, setText] = useState('')
  const [idx, setIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = words[idx % words.length]
    let timeout: number

    if (!isDeleting) {
      timeout = window.setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed)
      if (text === current) timeout = window.setTimeout(() => setIsDeleting(true), pause)
    } else {
      timeout = window.setTimeout(() => setText(current.slice(0, text.length - 1)), typingSpeed / 2)
      if (text === '') {
        setIsDeleting(false)
        setIdx((i) => i + 1)
      }
    }

    return () => window.clearTimeout(timeout)
  }, [text, isDeleting, idx, words, typingSpeed, pause])

  return text
}

function generateParticles(count = 20) {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.floor(Math.random() * 20) + 10,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 6,
    color: Math.random() > 0.6 ? 'bg-cyan-400/20' : 'bg-fuchsia-500/15',
  }))
}

function Home() {
  const typed = useTypewriter(roles, 75, 1600)
  const particles = useMemo(() => generateParticles(20), [])

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-gradient-to-br from-slate-900 to-slate-950 px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
      {/* Animated particles background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(56,189,248,0.15),_transparent_25%),radial-gradient(circle_at_80%_80%,_rgba(236,72,153,0.12),_transparent_30%)]" />
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute rounded-full ${p.color}`}
            style={{ width: p.size, height: p.size, left: `${p.left}%`, top: `${p.top}%` }}
            animate={{
              y: ['0%', `${Math.random() * 40 - 20}%`],
              x: ['0%', `${Math.random() * 30 - 15}%`],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Main content grid */}
      <div className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        {/* Left: Text content */}
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="space-y-8">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-sm uppercase tracking-[0.4em] text-cyan-300">
              Full Stack Developer
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-3 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
              Joseph Adugu
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-4 flex items-center gap-2">
              <span className="text-xl text-slate-300">I'm a</span>
              <span className="text-xl font-semibold text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text">
                {typed}
                <span className="ml-1 inline-block h-6 w-1 bg-cyan-300 animate-pulse rounded-full" />
              </span>
            </motion.div>
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="max-w-xl text-lg leading-8 text-slate-300">
            Highly competent fullstack developer with 2+ years of experience building scalable web applications. I craft responsive interfaces, robust APIs, and performant backends that users love.
          </motion.p>

          {/* Stack badges */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-2">
            {stack.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.05 }}
                className="rounded-full border border-slate-700/50 bg-slate-900/50 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-sm"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:shadow-cyan-500/60 hover:scale-105"
            >
              Get in Touch
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/50 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-white backdrop-blur-sm"
            >
              View My Work
            </Link>
          </motion.div>

          {/* Social links */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="flex gap-3 pt-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300 hover:bg-slate-800"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.47-2.382 1.236-3.222-.124-.304-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 013.003-.403c1.02.005 2.045.138 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.655 1.649.243 2.872.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.48 5.921.43.372.813 1.103.813 2.222 0 1.604-.015 2.896-.015 3.286 0 .323.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300 hover:bg-slate-800"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.792-1.75-1.767 0-.975.784-1.767 1.75-1.767s1.75.792 1.75 1.767c0 .975-.784 1.767-1.75 1.767zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.867 0-2.153 1.459-2.153 2.967v5.696h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.56 2.84-1.56 3.038 0 3.6 2.001 3.6 4.602v5.591z" />
              </svg>
            </a>
            <a
              href="mailto:aduguj@gmail.com"
              className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-300 hover:bg-slate-800"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Profile image with animations */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mx-auto w-full max-w-sm">
          {/* Animated glow background */}
          <motion.div
            className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/10 to-cyan-500/20 blur-3xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />

          {/* Profile circle container */}
          <motion.div
            className="relative z-10 mx-auto flex h-80 w-80 items-center justify-center rounded-full border-2 border-slate-800/60 bg-slate-900/80 shadow-2xl"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="/profile.jpg"
              alt="Joseph Adugu"
              onError={(e) => ((e.currentTarget as HTMLImageElement).src = '/logo512.png')}
              className="h-full w-full rounded-full object-cover"
            />

            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-cyan-400/40"
              animate={{ boxShadow: ['0 0 20px 0 rgba(56,189,248,0.2)', '0 0 40px 10px rgba(56,189,248,0.1)', '0 0 20px 0 rgba(56,189,248,0.2)'] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Location info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="mt-8 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Based in</p>
            <p className="mt-2 text-lg font-semibold text-white">Abuja, Nigeria</p>
            <p className="mt-3 text-sm text-slate-400">📧 aduguj@gmail.com</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
