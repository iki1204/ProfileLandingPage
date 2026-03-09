import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import anime from 'animejs/lib/anime.es.js'

const floating = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function Hero() {
  const dotsRef = useRef(null)

  useEffect(() => {
    const container = dotsRef.current
    if (!container) return

    const dots = Array.from(container.children)

    anime({
      targets: dots,
      translateY: () => anime.random(-30, 30),
      translateX: () => anime.random(-20, 20),
      scale: () => anime.random(70, 140) / 100,
      opacity: () => anime.random(20, 90) / 100,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true,
      delay: anime.stagger(120),
      duration: () => anime.random(2200, 4200),
    })
  }, [])

  return (
    <section id="inicio" className="relative overflow-hidden px-6 pb-20 pt-36 sm:px-10">
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />
      <div ref={dotsRef} className="pointer-events-none absolute inset-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className="absolute h-2 w-2 rounded-full bg-cyan-300/40"
            style={{ left: `${(index % 5) * 18 + 8}%`, top: `${Math.floor(index / 5) * 20 + 8}%` }}
          />
        ))}
      </div>
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
            Portafolio de Desarrollador Full Stack
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-['Space_Grotesk'] text-4xl font-bold leading-tight text-white sm:text-6xl"
          >
            Ikian Saa{' '}
            <span className="block bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              Desarrollador Full Stack
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg text-slate-300"
          >
            Construyendo aplicaciones web escalables y experiencias digitales modernas.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#proyectos" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:shadow-glow">
              Ver Proyectos
            </a>
            <a href="#contacto" className="glass rounded-full px-6 py-3 font-semibold text-white transition hover:border-cyan-300/50 hover:text-cyan-200">
              Contrátame
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
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Enfoque actual</p>
          <p className="mt-4 text-xl font-semibold text-white">Productos web orientados a performance</p>
          <p className="mt-3 text-slate-300">Desarrollo sistemas full stack confiables con frontend premium y backend escalable.</p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="glass rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-cyan-300">4+</p>
              <p className="text-slate-400">Años de experiencia</p>
            </div>
            <div className="glass rounded-2xl p-4 text-center">
              <p className="text-2xl font-bold text-violet-300">30+</p>
              <p className="text-slate-400">Proyectos entregados</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
