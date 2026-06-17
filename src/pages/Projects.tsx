import { motion } from 'framer-motion'
import { projects } from '../data/projects'

function Projects() {
  return (
    <section className="glass-card my-6 space-y-8">
      <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <h2 className="text-3xl font-semibold text-white">Work</h2>
        <p className="mt-4 text-slate-300">
          Selected projects that demonstrate scalable architecture, responsive design, and backend integration.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="rounded-[2rem] border border-slate-800/70 bg-slate-900/80 p-6 shadow-glow">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{project.category}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-slate-300 leading-7">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
