import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

const services = [
  {
    title: 'Frontend systems',
    text: 'Responsive React interfaces with reusable components, tidy state, and interaction patterns that stay clear on every screen.',
  },
  {
    title: 'Backend APIs',
    text: 'Node and Express services shaped around authentication, validation, documentation, and reliable business workflows.',
  },
  {
    title: 'Data foundations',
    text: 'PostgreSQL and MongoDB models that keep product logic understandable, consistent, and ready to scale.',
  },
]

const stack = ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Tailwind CSS']
const featuredProject = projects[0]
const flowWidths = [88, 64, 76, 52]

function Home() {
  return (
    <section className="space-y-10 md:space-y-12">
      <div className="grid gap-7 pb-3 pt-0 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl"
        >
          <div>
            <p className="text-xs font-black uppercase text-[#bf5b39] [letter-spacing:0.2em]">Hello, I am</p>
            <h1 className="hero-name mt-2">Joseph Adugu</h1>
          </div>

          <p className="mt-4 max-w-3xl text-balance text-lg font-black leading-tight text-[#17130f] sm:text-xl lg:text-2xl">
            A fullstack developer building polished web products with reliable APIs and thoughtful user interfaces.
          </p>
          <p className="mt-3 max-w-2xl text-pretty text-sm leading-6 text-[#5d554c] sm:text-base">
            I turn product ideas into practical systems: focused React frontends, dependable Node.js services, and data models that keep real work moving.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/projects" className="ink-button">
              View Work
            </Link>
            <Link to="/contact" className="outline-button">
              Start a Project
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="grid gap-3 lg:justify-items-center"
        >
          <div className="hero-portrait-card">
            <div className="hero-portrait-wrap">
              <img
                src={import.meta.env.BASE_URL + 'profile.jpg'}
                alt="Joseph Adugu"
                onError={(e) => ((e.currentTarget as HTMLImageElement).src = import.meta.env.BASE_URL + 'logo512.png')}
                className="hero-portrait"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-[0.68rem] font-black uppercase text-[#bf5b39] [letter-spacing:0.16em]">Fullstack Developer</p>
              <p className="mx-auto mt-2 max-w-sm text-balance text-sm font-black leading-6 text-[#17130f] sm:text-base">
                Building secure dashboards, APIs, portals, and database-backed business tools.
              </p>
            </div>
          </div>

          <div className="mx-auto flex max-w-lg flex-wrap justify-center gap-2">
            {stack.map((item) => (
              <span key={item} className="rounded-full border bg-[#fffaf0]/80 px-3 py-1.5 text-center text-[0.68rem] font-black uppercase text-[#6f665d] shadow-paper [letter-spacing:0.08em]">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <div className="space-y-3">
          <p className="section-label">How I work</p>
          <h2 className="section-title text-balance">Useful software, carefully put together.</h2>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-lg border bg-[#fffaf0] p-4 shadow-paper transition hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="text-xs font-black text-[#bf5b39]">0{index + 1}</span>
              <h3 className="mt-4 text-lg font-black text-[#17130f]">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5d554c]">{service.text}</p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="rounded-lg border bg-[#fffaf0] p-5 shadow-paper sm:p-6"
        >
          <p className="section-label">Featured build</p>
          <h2 className="mt-3 text-balance text-2xl font-black leading-tight text-[#17130f] sm:text-3xl">{featuredProject.title}</h2>
          <p className="mt-4 text-pretty text-base leading-7 text-[#5d554c]">{featuredProject.overview}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {featuredProject.metrics.map((metric) => (
              <div key={metric} className="flex min-h-20 items-center rounded-md border bg-[#f6f0e6] p-3">
                <p className="text-xs font-black leading-5 text-[#17130f]">{metric}</p>
              </div>
            ))}
          </div>
          <Link to={`/projects/${featuredProject.slug}`} className="ink-button mt-5">
            View Case Study
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="overflow-hidden rounded-lg border bg-[#17130f] p-4 text-[#fffaf0] shadow-lift"
        >
          <div className="flex items-center justify-between border-b border-[#fffaf0]/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#bf5b39]" />
              <span className="h-3 w-3 rounded-full bg-[#f4a261]" />
              <span className="h-3 w-3 rounded-full bg-[#496f5d]" />
            </div>
            <p className="text-xs font-black uppercase text-[#d9ccbb] [letter-spacing:0.14em]">{featuredProject.role}</p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-2">
              {featuredProject.features.slice(0, 4).map((feature) => (
                <div key={feature} className="rounded-md border border-[#fffaf0]/10 bg-[#fffaf0]/10 p-3 text-xs font-bold leading-5">
                  {feature}
                </div>
              ))}
            </div>
            <div className="rounded-lg bg-[#fffaf0] p-3 text-[#17130f]">
              <p className="text-xs font-black uppercase text-[#bf5b39] [letter-spacing:0.14em]">Operating View</p>
              <div className="mt-4 space-y-3">
                {flowWidths.map((width, index) => (
                  <div key={`flow-${index + 1}`}>
                    <div className="mb-2 flex justify-between text-xs font-black uppercase text-[#6f665d] [letter-spacing:0.1em]">
                      <span>Flow 0{index + 1}</span>
                      <span>{width}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-[#f6f0e6]">
                      <div className="h-full rounded-full" style={{ width: `${width}%`, backgroundColor: featuredProject.accent }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home
