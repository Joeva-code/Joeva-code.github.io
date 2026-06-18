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
    <header className="sticky top-0 z-30 border-b border-slate-700/50 bg-gradient-to-r from-slate-950/95 via-slate-900/95 to-slate-950/95 backdrop-blur-xl shadow-lg shadow-cyan-500/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <motion.div
          className="flex items-center gap-3 text-xl font-bold tracking-tight text-white"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative">
            <img
              src={avatarError ? '/logo192.png' : '/profile.jpg'}
              alt="Profile"
              onError={() => setAvatarError(true)}
              className="h-11 w-11 rounded-full object-cover ring-2 ring-cyan-500/40 shadow-lg"
            />
            <motion.div
              className="absolute inset-0 rounded-full ring-2 ring-cyan-400"
              animate={{ opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">Joseph Adugu</span>
        </motion.div>

        <nav className="flex items-center gap-8 text-sm uppercase tracking-[0.15em] text-slate-400">
          {links.map((link, i) => (
            <motion.div key={link.path} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative px-2 py-1 transition-colors duration-300 ${isActive ? 'text-cyan-300 font-semibold' : 'hover:text-slate-100'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
