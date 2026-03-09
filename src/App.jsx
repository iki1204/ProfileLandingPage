import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Section from './components/Section'
import { projects, services, skills } from './components/data'

const cardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: 'easeOut' },
}

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <Hero />

      <Section
        id="about"
        title="About Me"
        description="I’m a full-stack developer with a strong front-end focus, experienced in building modern web applications that are scalable, fast, and maintainable. I’m passionate about clean architecture, thoughtful UX, and high-performance systems."
      />

      <Section id="skills" title="Skills">
        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([category, list], idx) => (
            <motion.article
              key={category}
              {...cardMotion}
              transition={{ ...cardMotion.transition, delay: idx * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {list.map((skill) => (
                  <span key={skill} className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-300/50">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="services" title="Services">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, idx) => (
            <motion.article key={service.title} {...cardMotion} transition={{ ...cardMotion.transition, delay: idx * 0.08 }} className="glass group rounded-2xl p-6 transition hover:shadow-glow">
              <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-slate-300">{service.description}</p>
              <span className="mt-6 inline-block text-sm text-cyan-200 transition group-hover:translate-x-1">Learn more →</span>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article key={project.title} {...cardMotion} transition={{ ...cardMotion.transition, delay: idx * 0.08 }} className="glass group overflow-hidden rounded-2xl">
              <div className="h-40 bg-gradient-to-br from-cyan-500/35 via-slate-700 to-violet-500/35" />
              <div className="p-6">
                <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
                <button className="mt-6 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:border-cyan-300/60 hover:text-cyan-200">
                  View Project
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" description="Let’s build something amazing together.">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <div className="glass rounded-2xl p-6">
            <p className="text-sm uppercase tracking-widest text-slate-400">Reach Out</p>
            <ul className="mt-4 space-y-3 text-slate-200">
              <li>Email: <a className="text-cyan-200" href="mailto:ikian@example.com">ikian@example.com</a></li>
              <li>LinkedIn: <a className="text-cyan-200" href="#">linkedin.com/in/ikiansaa</a></li>
              <li>GitHub: <a className="text-cyan-200" href="#">github.com/ikiansaa</a></li>
            </ul>
          </div>
          <form className="glass rounded-2xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm outline-none transition focus:border-cyan-300/60" placeholder="Name" />
              <input className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm outline-none transition focus:border-cyan-300/60" placeholder="Email" />
              <input className="sm:col-span-2 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm outline-none transition focus:border-cyan-300/60" placeholder="Subject" />
              <textarea rows="4" className="sm:col-span-2 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm outline-none transition focus:border-cyan-300/60" placeholder="Tell me about your project" />
            </div>
            <button type="button" className="mt-5 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:shadow-glow">
              Send Message
            </button>
          </form>
        </div>
      </Section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400 sm:px-10">
        © {new Date().getFullYear()} Ikian Saa. Crafted with React, Tailwind CSS, and Framer Motion.
      </footer>
    </div>
  )
}
