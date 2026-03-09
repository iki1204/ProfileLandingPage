import { motion } from 'framer-motion'

const floating = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-6 pb-20 pt-36 sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <motion.div
        className="pointer-events-none absolute -left-12 top-24 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl"
        variants={floating}
        animate="animate"
      />
      <motion.div
        className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl"
        variants={floating}
        animate="animate"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-cyan-200"
          >
            Full Stack Developer Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-white sm:text-6xl"
          >
            Ikian Saa <span className="block bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">Full Stack Developer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg text-slate-300"
          >
            Building scalable web applications and modern digital experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#projects" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:shadow-glow">
              View Projects
            </a>
            <a href="#contact" className="glass rounded-full px-6 py-3 font-semibold text-white transition hover:border-cyan-300/50 hover:text-cyan-200">
              Hire Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="glass relative rounded-3xl p-7 shadow-glow"
        >
          <div className="absolute -inset-[1px] -z-10 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-violet-500/20 blur-xl" />
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Current Focus</p>
          <p className="mt-4 text-xl font-semibold text-white">Performance-driven web products</p>
          <p className="mt-3 text-slate-300">Shipping reliable full-stack systems with polished front-end experiences and scalable back-end services.</p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="glass rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-cyan-300">4+</p>
              <p className="text-slate-400">Years Building</p>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-violet-300">30+</p>
              <p className="text-slate-400">Projects Delivered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
