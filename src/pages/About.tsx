import { motion } from 'framer-motion'

function About() {
  return (
    <section className="glass-card my-6">
      <motion.h2 initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="text-3xl font-semibold text-white">
        About Me
      </motion.h2>
      <p className="mt-4 text-slate-300 leading-7">
        I build accessible, performance-minded applications with modern React, TypeScript, and smooth motion transitions.
      </p>
    </section>
  )
}

export default About
