import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section className="space-y-6">
      <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="section-label">Selected work</p>
          <h2 className="section-title mt-3">Case studies for interfaces, services, and data-heavy workflows.</h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-[#5d554c]">
          A focused set of builds showing how I approach product clarity, authentication, reusable UI, database structure, and reliable delivery.
        </p>
      </motion.div>

      <div className="grid gap-4">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="panel group grid gap-5 overflow-hidden p-4 transition hover:-translate-y-1 hover:shadow-lift md:grid-cols-[0.36fr_1fr]"
          >
            <div className="flex min-h-44 flex-col justify-between rounded-md bg-[#17130f] p-4 text-[#fffaf0]">
              <div>
                <span className="text-xs font-black text-[#f4a261]">0{index + 1}</span>
                <p className="mt-4 text-[0.68rem] font-black uppercase text-[#d9ccbb] [letter-spacing:0.16em]">{project.category}</p>
              </div>
              <p className="text-2xl font-black leading-none text-[#fffaf0] md:text-3xl">{project.title.split(' ')[0]}</p>
            </div>

            <div className="flex flex-col justify-between gap-5 py-1">
              <div>
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="rounded-md border bg-[#f6f0e6] px-3 py-1 text-xs font-black uppercase text-[#6f665d] [letter-spacing:0.1em]">{project.role}</span>
                  <span className="rounded-md border bg-[#f6f0e6] px-3 py-1 text-xs font-black uppercase text-[#6f665d] [letter-spacing:0.1em]">{project.year}</span>
                </div>
                <h3 className="text-xl font-black leading-tight text-[#17130f] sm:text-2xl">{project.title}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-[#5d554c]">{project.description}</p>
              </div>
              <div>
                <p className="border-l-4 border-[#bf5b39] bg-[#f6f0e6] p-3 text-sm font-bold leading-6 text-[#403832]">{project.impact}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md border bg-[#fffaf0] px-3 py-1.5 text-[0.68rem] font-black uppercase text-[#6f665d] [letter-spacing:0.08em]">
                    {tag}
                  </span>
                ))}
                </div>
                <Link to={`/projects/${project.slug}`} className="mt-4 inline-flex text-xs font-black uppercase text-[#bf5b39] [letter-spacing:0.12em] hover:text-[#17130f]">
                  Read Case Study
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
