import { motion } from 'framer-motion'

const skillGroups = [
  { title: 'Frontend', skills: ['React.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Responsive UI'] },
  { title: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'API Documentation'] },
  { title: 'Data', skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Schema Design', 'Data Modeling'] },
]

const experience = [
  {
    role: 'Fullstack Developer',
    company: 'CHIA-AONDOTER NIG LTD',
    period: '2025 - Present',
    notes: [
      'Design and deliver fullstack applications with React, Node.js, and Express.',
      'Build secure RESTful APIs with authentication, validation, and documentation.',
      'Model PostgreSQL and MongoDB data structures for scalable business workflows.',
    ],
  },
  {
    role: 'Backend Developer',
    company: 'FXYAGRO TECH',
    period: '2024 - 2025',
    notes: ['Improved backend reliability, API integrations, and data flows for internal product operations.'],
  },
]

function About() {
  return (
    <section className="space-y-6">
      <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="panel p-5 sm:p-6 lg:p-7">
          <p className="section-label">About Joseph</p>
          <h2 className="section-title mt-3">I like building software that feels simple in front and disciplined underneath.</h2>
          <div className="mt-5 space-y-4 text-base leading-7 text-[#5d554c]">
            <p>
              I work across planning, interface design, API development, database structure, testing, and deployment. My strongest work happens where product clarity meets steady engineering.
            </p>
            <p>
              I care about organized components, predictable endpoints, clear data relationships, and interfaces that adapt naturally across mobile and desktop screens.
            </p>
          </div>
        </div>

        <aside className="panel overflow-hidden p-3">
          <div className="overflow-hidden rounded-md bg-[#17130f]">
            <img
              src={import.meta.env.BASE_URL + 'profile.jpg'}
              alt="Joseph Adugu"
              onError={(e) => ((e.currentTarget as HTMLImageElement).src = import.meta.env.BASE_URL + 'logo192.png')}
              className="aspect-[4/3] w-full object-cover object-top sm:aspect-[5/3] lg:aspect-[4/3]"
            />
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-md border bg-[#f6f0e6] p-4">
              <p className="section-label">Education</p>
              <p className="mt-2 font-black text-[#17130f]">B.Sc. (Ed) Chemistry</p>
              <p className="mt-1 text-sm leading-6 text-[#6f665d]">University of Agriculture Makurdi</p>
            </div>
            <div className="rounded-md border bg-[#f6f0e6] p-4">
              <p className="section-label">Location</p>
              <p className="mt-2 font-black text-[#17130f]">Abuja, Nigeria</p>
              <p className="mt-1 text-sm leading-6 text-[#6f665d]">Open to remote collaboration</p>
            </div>
          </div>
        </aside>
      </motion.div>

      <div className="grid gap-5 lg:grid-cols-[1fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} className="panel p-5 sm:p-6">
          <h3 className="text-xl font-black text-[#17130f]">Experience</h3>
          <div className="mt-5 space-y-4">
            {experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className="border-l-4 border-[#496f5d] bg-[#f6f0e6] p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-base font-black text-[#17130f]">{item.role}</p>
                    <p className="mt-1 text-sm font-black uppercase text-[#bf5b39] [letter-spacing:0.12em]">{item.company}</p>
                  </div>
                  <p className="rounded-md border bg-[#fffaf0] px-3 py-1 text-xs font-black uppercase text-[#5d554c] [letter-spacing:0.1em]">{item.period}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-[#5d554c]">
                  {item.notes.map((note) => (
                    <li key={note} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#bf5b39]" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.18 }} className="panel p-5 sm:p-6">
          <h3 className="text-xl font-black text-[#17130f]">Core Skills</h3>
          <div className="mt-5 space-y-5">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-black uppercase text-[#bf5b39] [letter-spacing:0.18em]">{group.title}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-md border bg-[#f6f0e6] px-3 py-1.5 text-xs font-bold text-[#5d554c]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

