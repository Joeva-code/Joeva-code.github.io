import { motion } from 'framer-motion'

function Contact() {
  return (
    <section className="glass-card my-6">
      <motion.h2 initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="text-3xl font-semibold text-white">
        Contact
      </motion.h2>
      <p className="mt-4 text-slate-300 leading-7">
        Ready to collaborate? Send a message and let's build something great together.
      </p>
    </section>
  )
}

export default Contact
