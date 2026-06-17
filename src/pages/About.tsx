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
    <section className="glass-card my-6 space-y-8">
      <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
        <h2 className="text-3xl font-semibold text-white">About Me</h2>
        <p className="mt-4 text-slate-300 leading-8">
          Highly competent Fullstack Developer with over 2+ years of experience building scalable web applications for diverse clients. Expertise spans the entire development lifecycle from requirements gathering and system design to implementation, testing, and deployment.
        </p>
        <p className="mt-4 text-slate-300 leading-8">
          Specializes in creating RESTful APIs, integrating databases (PostgreSQL, MongoDB, MySQL), and building responsive frontends with React.js.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/70 p-6">
          <div>
            <h3 className="text-xl font-semibold text-white">Experience</h3>
            <div className="mt-4 space-y-5 text-slate-300">
              <div>
                <p className="font-semibold text-white">CHIA-AONDOTER NIG LTD</p>
                <p className="text-sm text-slate-400">Fullstack Developer • 2025 - Present</p>
                <ul className="mt-3 list-inside list-disc space-y-2 text-slate-300">
                  <li>Designed and delivered fullstack web applications using React, Node.js, and Express.</li>
                  <li>Built secure RESTful APIs with proper authentication and documentation.</li>
                  <li>Architected PostgreSQL and MongoDB schemas for scalable data workflows.</li>
                  <li>Collaborated with clients to translate requirements into technical specifications.</li>
                  <li>Deployed and maintained applications on cloud platforms.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white">FXYAGRO TECH</p>
                <p className="text-sm text-slate-400">Backend Developer • 2024 - 2025</p>
                <p className="mt-3 text-slate-300 leading-7">
                  Engaged in the development of company-owned projects and facilitated integration across platforms and technology stacks in use.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Education</h3>
            <div className="mt-4 space-y-3 text-slate-300">
              <p className="font-semibold text-white">B.Sc (ed) Chemistry</p>
              <p>University of Agriculture Makurdi, Benue State, Nigeria</p>
              <p className="text-sm text-slate-400">Graduate</p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/70 p-6">
          <h3 className="text-xl font-semibold text-white">Skills</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill} className="rounded-2xl border border-slate-800/80 bg-slate-950/80 px-4 py-3 text-sm text-slate-200">
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
