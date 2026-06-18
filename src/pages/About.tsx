import { motion } from 'framer-motion'

const skills = [
  'React.js',
  'JavaScript (ES6+)',
  'HTML5',
  'Tailwind CSS',
  'Responsive Design',
  'Node.js',
  'Express.js',
  'RESTful APIs',
  'PostgreSQL',
  'MongoDB',
  'MySQL',
]

function About() {
  return (
    <section className="my-6 space-y-10">
      <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="grid gap-8 md:grid-cols-3">
        <div className="col-span-2">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">About Me</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Highly competent Fullstack Developer with over 2 years of experience building scalable web applications for diverse clients. My expertise spans the full development lifecycle from planning and architecture to implementation, testing, and delivery.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I specialize in creating RESTful APIs, integrating databases like PostgreSQL and MongoDB, and building responsive React interfaces with polished animations and strong UX.
          </p>
        </div>

        <div className="col-span-1 flex items-start justify-center">
          <div className="h-44 w-44 overflow-hidden rounded-[2rem] border border-slate-800/70 bg-slate-900/80 shadow-[0_20px_60px_rgba(15,23,42,0.35)]">
            <img src="/profile.jpg" alt="Profile" onError={(e) => ((e.currentTarget as HTMLImageElement).src = '/logo192.png')} className="h-full w-full object-cover" />
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-8 rounded-[2rem] border border-slate-800/60 bg-slate-900/90 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.35)]">
          <div>
            <h3 className="text-2xl font-semibold text-white">Experience</h3>
            <div className="mt-6 space-y-6 text-slate-300">
              <div className="space-y-2 rounded-3xl bg-slate-950/80 p-5">
                <p className="font-semibold text-white">CHIA-AONDOTER NIG LTD</p>
                <p className="text-sm text-cyan-300">Fullstack Developer • 2025 - Present</p>
                <ul className="mt-4 list-inside list-disc space-y-2 text-slate-300">
                  <li>Designed and delivered fullstack applications using React, Node.js, and Express.</li>
                  <li>Built secure RESTful APIs with authentication and documentation.</li>
                  <li>Architected PostgreSQL and MongoDB schemas for scalable systems.</li>
                  <li>Collaborated with stakeholders to convert requirements into working software.</li>
                  <li>Deployed and monitored cloud-hosted applications.</li>
                </ul>
              </div>

              <div className="space-y-2 rounded-3xl bg-slate-950/80 p-5">
                <p className="font-semibold text-white">FXYAGRO TECH</p>
                <p className="text-sm text-cyan-300">Backend Developer • 2024 - 2025</p>
                <p className="mt-3 text-slate-300 leading-7">
                  Worked on internal platforms and integrations, improving backend reliability and data flows across teams.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white">Education</h3>
            <div className="mt-5 space-y-3 text-slate-300">
              <p className="font-semibold text-white">B.Sc. (Ed) Chemistry</p>
              <p>University of Agriculture Makurdi, Benue State, Nigeria</p>
              <p className="text-sm text-slate-400">Graduate</p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800/60 bg-slate-900/90 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.35)]">
          <h3 className="text-2xl font-semibold text-white">Skills</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill} className="rounded-3xl bg-slate-950/95 px-4 py-3 text-sm font-medium text-slate-100 ring-1 ring-slate-700/50">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
