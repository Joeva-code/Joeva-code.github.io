import { motion } from 'framer-motion'

function Projects() {
  return (
    <section className="glass-card my-6">
      <motion.h2 initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="text-3xl font-semibold text-white">
        Projects
      </motion.h2>
      <p className="mt-4 text-slate-300">
        Showcase your best work with animated cards, responsive layouts, and polished interactions.
      </p>
    </section>
  )
}

export default Projects
