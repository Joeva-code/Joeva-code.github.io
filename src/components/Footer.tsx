import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-transparent bg-gradient-to-t from-purple-900 via-fuchsia-900 to-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row md:px-10">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-white">Joseph Adugu</p>
          <p className="mt-1 text-xs text-slate-300">Building thoughtful web experiences • Abuja, Nigeria</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-cyan-300 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-fuchsia-300 transition">
            LinkedIn
          </a>
          <a href="mailto:aduguj@gmail.com" className="text-slate-200 hover:text-amber-300 transition">
            Email
          </a>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xs text-slate-300">
          © {new Date().getFullYear()} Joseph Adugu. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}
