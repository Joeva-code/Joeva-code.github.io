import { motion } from 'framer-motion'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Joeva-code',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.34 6.84 9.7.5.1.68-.22.68-.49v-1.8c-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.07c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.7c0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/joeva-code',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
        <path d="M6.94 8.98H3.75v10.27h3.19V8.98ZM5.35 4A1.84 1.84 0 1 0 5.3 7.68h.03A1.84 1.84 0 1 0 5.35 4Zm14.9 9.36c0-3.15-1.68-4.62-3.93-4.62a3.39 3.39 0 0 0-3.08 1.7V8.98h-3.18c.04.96 0 10.27 0 10.27h3.18v-5.74c0-.31.02-.61.11-.83.23-.61.76-1.24 1.65-1.24 1.16 0 1.63.93 1.63 2.29v5.52h3.19v-5.89h.43Z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/Joevacode7',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
        <path d="M14.66 10.47 22.25 2h-1.8l-6.59 7.35L8.6 2H2.53l7.96 11.12L2.53 22h1.8l6.96-7.76L16.85 22h6.07l-8.26-11.53Zm-2.46 2.75-.81-1.11L4.97 3.3h2.77l5.18 7.1.8 1.11 6.74 9.25h-2.77l-5.49-7.54Z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/Joeva_code',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
        <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7.2A4.8 4.8 0 1 1 12 16.8 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Zm5.05-2.55a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="mt-10 border-t bg-[#17130f] text-[#fffaf0]">
      <div className="page-shell flex flex-col items-center justify-between gap-5 py-6 text-center md:flex-row md:text-left">
        <div>
          <p className="text-sm font-black">Joseph Adugu</p>
          <p className="mt-1 text-xs text-[#d9ccbb]">Building thoughtful web experiences in Abuja, Nigeria</p>
        </div>

        <div className="flex items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              title={link.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#fffaf0]/15 text-[#d9ccbb] transition hover:-translate-y-0.5 hover:border-[#f4a261] hover:text-[#f4a261]"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-xs text-[#d9ccbb]">
          &copy; {new Date().getFullYear()} Joeva-CODE. All rights reserved.
        </motion.div>
      </div>
    </footer>
  )
}
