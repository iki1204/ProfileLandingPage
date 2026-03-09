import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Contacto from "./components/Contacto";
import Habilidades from "./components/Habilidades";
import Section from "./components/Section";
import UseAnimationFrame from "./components/Cube";
import { proyectos, servicios } from "./components/data";

const cardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: "easeOut" },
};

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <Hero />

      <div className="mx-auto grid max-w-6xl items-center  px-6 py-20 sm:px-10 lg:grid-cols-2">
        <div className="flex justify-center">
          <UseAnimationFrame />
        </div>

        <Section
          id="sobre-mi"
          title="Sobre mí"
          description="Soy desarrollador full stack con fuerte enfoque frontend. Tengo experiencia construyendo aplicaciones web modernas, escalables y de alto rendimiento. Me apasiona la arquitectura limpia, la experiencia de usuario y la optimización continua."
        />
      </div>

      <Habilidades />

      <Section id="servicios" title="Servicios">
        <div className="grid gap-6 sm:grid-cols-2">
          {servicios.map((servicio, idx) => (
            <motion.article
              key={servicio.titulo}
              {...cardMotion}
              transition={{ ...cardMotion.transition, delay: idx * 0.08 }}
              className="glass group rounded-2xl p-6 transition hover:shadow-glow"
            >
              <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white">
                {servicio.titulo}
              </h3>
              <p className="mt-3 text-slate-300">{servicio.descripcion}</p>
              <span className="mt-6 inline-block text-sm text-cyan-200 transition group-hover:translate-x-1">
                Saber más →
              </span>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="proyectos" title="Proyectos">
        <div className="grid gap-6 lg:grid-cols-3">
          {proyectos.map((proyecto, idx) => (
            <motion.article
              key={proyecto.titulo}
              {...cardMotion}
              transition={{ ...cardMotion.transition, delay: idx * 0.08 }}
              className="glass group overflow-hidden rounded-2xl"
            >
              <div className="h-40 bg-gradient-to-br from-cyan-500/35 via-slate-700 to-violet-500/35" />
              <div className="p-6">
                <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white">
                  {proyecto.titulo}
                </h3>
                <p className="mt-3 text-slate-300">{proyecto.descripcion}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {proyecto.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <button className="mt-6 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition hover:border-cyan-300/60 hover:text-cyan-200">
                  Ver proyecto
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Contacto />

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400 sm:px-10">
        © {new Date().getFullYear()} Ikian Saa. Hecho con React
      </footer>
    </div>
  );
}
