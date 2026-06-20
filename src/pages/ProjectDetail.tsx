import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

function ProjectVisual({ title, accent }: { title: string; accent: string }) {
  return (
    <div className="relative min-h-[18rem] overflow-hidden rounded-lg border bg-[#17130f] p-4 text-[#fffaf0] shadow-paper">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[#bf5b39]" />
        <span className="h-3 w-3 rounded-full bg-[#f4a261]" />
        <span className="h-3 w-3 rounded-full bg-[#496f5d]" />
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-[0.75fr_1.25fr]">
        <div className="space-y-2">
          {[title, 'Users', 'Reports', 'Settings'].map((item, index) => (
            <div
              key={item}
              className="rounded-md border border-[#fffaf0]/10 bg-[#fffaf0]/10 px-3 py-2.5 text-xs font-black"
              style={{ color: index === 0 ? '#fffaf0' : '#d9ccbb' }}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-[#fffaf0]/10 bg-[#fffaf0] p-3 text-[#17130f]">
          <div className="flex items-center justify-between gap-3 border-b pb-3">
            <div>
              <p className="text-xs font-black uppercase text-[#6f665d] [letter-spacing:0.14em]">Workspace</p>
              <p className="mt-1 text-lg font-black">{title}</p>
            </div>
            <span className="rounded-md px-3 py-1.5 text-[0.68rem] font-black uppercase text-[#fffaf0]" style={{ backgroundColor: accent }}>
              Live flow
            </span>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[68, 84, 52].map((height, index) => (
              <div key={height} className="rounded-md bg-[#f6f0e6] p-3">
                <div className="h-12 rounded-sm bg-[#17130f]/10">
                  <div className="h-full rounded-sm" style={{ width: `${height}%`, backgroundColor: accent }} />
                </div>
                <p className="mt-3 text-xs font-black uppercase text-[#6f665d] [letter-spacing:0.1em]">Signal 0{index + 1}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-2">
            {[92, 76, 58].map((width) => (
              <div key={width} className="h-3 rounded-full bg-[#f6f0e6]">
                <div className="h-full rounded-full" style={{ width: `${width}%`, backgroundColor: accent }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-14 -right-12 h-36 w-36 rounded-full border border-[#fffaf0]/10" />
    </div>
  )
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <section className="space-y-6">
      <Link to="/projects" className="outline-button w-fit">
        Back to Work
      </Link>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
        <div className="panel flex flex-col justify-between p-5 sm:p-6">
          <div>
            <p className="section-label">{project.category}</p>
            <h1 className="mt-3 text-3xl font-black leading-tight text-[#17130f] sm:text-4xl">{project.title}</h1>
            <p className="mt-4 text-base leading-7 text-[#5d554c]">{project.overview}</p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              ['Role', project.role],
              ['Year', project.year],
              ['Stack', project.tags.join(', ')],
              ['Focus', project.category],
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border bg-[#f6f0e6] p-3">
                <p className="text-xs font-black uppercase text-[#bf5b39] [letter-spacing:0.14em]">{label}</p>
                <p className="mt-2 text-sm font-black leading-6 text-[#17130f]">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <ProjectVisual title={project.title} accent={project.accent} />
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35 }} className="panel p-5 sm:p-6">
          <p className="section-label">Challenge</p>
          <p className="mt-3 text-base leading-7 text-[#5d554c]">{project.challenge}</p>
        </motion.article>

        <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.08 }} className="panel p-5 sm:p-6">
          <p className="section-label">Solution</p>
          <p className="mt-3 text-base leading-7 text-[#5d554c]">{project.solution}</p>
        </motion.article>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="panel p-5 sm:p-6">
          <h2 className="text-xl font-black text-[#17130f]">Key Features</h2>
          <div className="mt-4 grid gap-3">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 rounded-md border bg-[#f6f0e6] p-3">
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: project.accent }} />
                <p className="text-sm font-bold text-[#403832]">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-5 sm:p-6">
          <h2 className="text-xl font-black text-[#17130f]">Impact</h2>
          <p className="mt-3 border-l-4 bg-[#f6f0e6] p-3 text-sm font-bold leading-6 text-[#403832]" style={{ borderColor: project.accent }}>
            {project.impact}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric} className="rounded-md border bg-[#fffaf0] p-3">
                <p className="text-xs font-black leading-5 text-[#17130f]">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="panel flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm font-bold leading-6 text-[#403832]">
          Want a walkthrough of this kind of build or a similar fullstack system for your team?
        </p>
        <Link to="/contact" className="ink-button">
          Start a Conversation
        </Link>
      </div>
    </section>
  )
}

export default ProjectDetail
