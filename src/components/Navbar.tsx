import { Link, NavLink } from 'react-router-dom'
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
    <header className="sticky top-0 z-30 border-b bg-[#fffaf0]/78 shadow-[0_10px_30px_rgba(38,28,20,0.06)]" style={{ backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)' }}>
      <div className="page-shell flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between">
        <Link to="/" aria-label="Go to home screen" className="w-fit rounded-lg outline-none transition focus-visible:ring-2 focus-visible:ring-[#bf5b39] focus-visible:ring-offset-2">
          <motion.div
            className="flex items-center gap-3 text-xl font-bold text-[#17130f]"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="relative">
              <img
                src={avatarError ? import.meta.env.BASE_URL + 'logo192.png' : import.meta.env.BASE_URL + 'profile.jpg'}
                alt="Joseph Adugu"
                onError={() => setAvatarError(true)}
                className="h-10 w-10 rounded-lg object-cover shadow-paper ring-1 ring-[#17130f]/15"
              />
              <motion.div
                className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#496f5d]"
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              />
            </div>
            <span className="text-xs font-black uppercase text-[#bf5b39] [letter-spacing:0.16em]">Joeva-CODE</span>
          </motion.div>
        </Link>

        <nav className="flex items-center gap-2 overflow-x-auto text-[0.68rem] font-black uppercase text-[#6f665d] sm:gap-3 [letter-spacing:0.1em]">
          {links.map((link, i) => (
            <motion.div key={link.path} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `relative block rounded-md px-3 py-1.5 transition-colors duration-300 ${isActive ? 'text-[#fffaf0]' : 'hover:text-[#17130f]'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute inset-0 rounded-md bg-[#17130f]"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 whitespace-nowrap">{link.label}</span>
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
