import Section from "./Section";
import { habilidades } from "./data";
import { motion } from "framer-motion";

const cardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.45, ease: "easeOut" },
};

export default function Habilidades() {
  return (
    <Section id="habilidades" title="Habilidades">
      <div className="grid gap-6 md:grid-cols-3">
        {Object.entries(habilidades).map(([categoria, lista], idx) => (
          <motion.article
            key={categoria}
            {...cardMotion}
            transition={{ ...cardMotion.transition, delay: idx * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white">
              {categoria}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {lista.map((skill) => {
                const Icono = skill.icono;
                return (
                  <span
                    key={skill.nombre}
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100 transition hover:-translate-y-0.5 hover:border-cyan-300/50"
                  >
                    <Icono className="text-base" />
                    {skill.nombre}
                  </span>
                );
              })}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
