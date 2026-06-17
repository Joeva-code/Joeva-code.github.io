import { motion } from 'framer-motion'

const contactItems = [
  { label: 'Email', value: 'aduguj@gmail.com' },
  { label: 'Phone', value: '+234 703 967 6495' },
  { label: 'Location', value: 'Abuja, Nigeria' },
  { label: 'Portfolio', value: 'joeva-code.github.io' },
]

function Contact() {
  return (
    <section className="glass-card my-6 space-y-8">
      <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <h2 className="text-3xl font-semibold text-white">Contact</h2>
        <p className="mt-4 text-slate-300 leading-7">
          I&apos;m available for fullstack development opportunities, collaboration, and freelance projects. Reach out for scalable web applications, API development, and responsive frontend solutions.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2">
        {contactItems.map((item) => (
          <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="rounded-[2rem] border border-slate-800/70 bg-slate-900/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{item.label}</p>
            <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Contact
