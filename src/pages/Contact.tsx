import { motion } from 'framer-motion'

const contactItems = [
  { label: 'Email', value: 'aduguj@gmail.com', href: 'mailto:aduguj@gmail.com' },
  { label: 'Phone', value: '+234 703 967 6495', href: 'tel:+2347039676495' },
  { label: 'Location', value: 'Abuja, Nigeria' },
  { label: 'Portfolio', value: 'joeva-code.github.io', href: 'https://joeva-code.github.io' },
]

const projectTypes = ['Fullstack web app', 'API development', 'Dashboard build', 'Portfolio or business site']

const inputClass =
  'w-full rounded-md border bg-[#fffaf0] px-3 py-2.5 text-sm text-[#17130f] outline-none transition placeholder:text-[#9a8f82] focus:border-[#bf5b39] focus:ring-4 focus:ring-[#bf5b39]/10'

function Contact() {
  return (
    <section className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
      <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="space-y-5">
        <div className="panel p-5 sm:p-6">
          <p className="section-label">Let us build</p>
          <h2 className="section-title mt-3">Bring the product, role, or workflow you want to shape.</h2>
          <p className="mt-4 text-base leading-7 text-[#5d554c]">
            Send a message and I will get back to you. I am open to fullstack development opportunities, freelance builds, API work, and responsive frontend implementation.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {contactItems.map((item) => {
            const content = (
              <div className="panel h-full p-4 transition hover:-translate-y-1 hover:shadow-paper">
                <p className="text-xs font-black uppercase text-[#bf5b39] [letter-spacing:0.18em]">{item.label}</p>
                <p className="mt-2 break-words text-base font-black text-[#17130f]">{item.value}</p>
              </div>
            )

            return item.href ? (
              <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            )
          })}
        </div>

        <div className="panel bg-[#203c56] p-4 text-[#fffaf0]">
          <p className="text-xs font-black uppercase text-[#f4a261] [letter-spacing:0.16em]">Best fit</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {projectTypes.map((type) => (
              <span key={type} className="rounded-md border border-[#fffaf0]/20 bg-[#fffaf0]/10 px-3 py-1.5 text-xs font-bold text-[#fffaf0]">
                {type}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        action="https://formsubmit.co/aduguj@gmail.com"
        method="POST"
        className="panel space-y-4 p-5 sm:p-6"
      >
        <input type="hidden" name="_subject" value="New portfolio message for Joseph Adugu" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

        <div>
          <p className="section-label">Quick message</p>
          <h3 className="mt-3 text-2xl font-black text-[#17130f]">Tell me what you need.</h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-black text-[#403832]">Name</span>
            <input required name="name" type="text" placeholder="Your name" className={inputClass} />
          </label>

          <label className="space-y-2">
            <span className="text-sm font-black text-[#403832]">Email</span>
            <input required name="email" type="email" placeholder="you@example.com" className={inputClass} />
          </label>
        </div>

        <label className="block space-y-2">
          <span className="text-sm font-black text-[#403832]">Project type</span>
          <select name="project_type" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="block space-y-2">
          <span className="text-sm font-black text-[#403832]">Message</span>
          <textarea required name="message" rows={6} placeholder="Share the goal, timeline, stack, or anything useful." className={`${inputClass} resize-none`} />
        </label>

        <button type="submit" className="ink-button w-full">
          Send Message
        </button>

        <p className="text-center text-xs leading-5 text-[#6f665d]">
          This form is powered by FormSubmit and sends directly to my email.
        </p>
      </motion.form>
    </section>
  )
}

export default Contact
