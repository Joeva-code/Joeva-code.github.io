import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const skills = ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Tailwind CSS']

function Home() {
  return (
    <section className="glass-card my-6 grid gap-8 p-8 md:grid-cols-[2fr_1fr]">
      <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Fullstack Developer</p>
        <h1 className="mt-4 text-5xl font-semibold text-white md:text-6xl">Joseph Adugu</h1>
        <p className="mt-6 text-slate-300 leading-8">
          Highly competent fullstack developer with over 2+ years of experience building scalable web applications for diverse clients. I deliver robust RESTful APIs, responsive React frontends, and performant database-backed systems.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm text-slate-200">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Get in Touch
          </Link>
          <Link to="/projects" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-cyan-400 hover:text-white">
            View Work
          </Link>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/90 p-6 shadow-glow">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(251,146,60,0.18),_transparent_25%)]" />
        <div className="relative flex h-full flex-col items-center justify-center gap-6 text-center">
          <div className="h-52 w-52 rounded-full bg-gradient-to-br from-cyan-500 to-orange-500 shadow-[0_0_60px_rgba(56,189,248,0.35)]" />
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Location</p>
            <p className="mt-2 text-xl font-semibold text-white">Abuja, Nigeria</p>
          </div>
          <div className="space-y-2 text-sm text-slate-300">
            <p>Email: aduguj@gmail.com</p>
            <p>Phone: +234 703 967 6495</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Home
