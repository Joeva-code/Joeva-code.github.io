import { motion } from 'framer-motion'

function Home() {
  return (
    <section className="glass-card my-6 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Welcome</p>
        <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">Crafting modern web experiences.</h1>
        <p className="mt-6 text-slate-300 leading-8">
          I'm a UI-focused developer building interactive portfolio sites, responsive apps, and elegant digital products with React, TypeScript, and motion.
        </p>
      </motion.div>
    </section>
  )
}

export default Home
