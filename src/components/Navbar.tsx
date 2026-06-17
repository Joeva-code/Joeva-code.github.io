import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const links = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

function Navbar() {
  const [avatarError, setAvatarError] = useState(false)

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-gradient-to-b from-slate-950/90 to-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <motion.div className="flex items-center text-xl font-semibold tracking-tight text-white" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <img
            src={avatarError ? '/logo192.png' : '/profile.jpg'}
            alt="Profile"
            onError={() => setAvatarError(true)}
            className="mr-3 h-10 w-10 rounded-full object-cover"
          />
          <span>Joseph Adugu</span>
        </motion.div>

        <nav className="flex items-center gap-4 text-sm uppercase tracking-[0.2em] text-slate-400">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? 'text-white transition-colors duration-200'
                  : 'hover:text-slate-100 transition-colors duration-200'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
