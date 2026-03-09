import Section from "./Section";

export default function Contacto() {
  return (
    <Section
      id="contacto"
      title="Contacto"
      description="Construyamos algo increíble juntos."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <div className="glass rounded-2xl p-6">
          <p className="text-sm uppercase tracking-widest text-slate-400">
            Conecta conmigo
          </p>
          <ul className="mt-4 space-y-3 text-slate-200">
            <li>
              Email:{" "}
              <a className="text-cyan-200" href="mailto:ikian@example.com">
                ikian@example.com
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a className="text-cyan-200" href="#">
                linkedin.com/in/ikiansaa
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a className="text-cyan-200" href="#">
                github.com/ikiansaa
              </a>
            </li>
          </ul>
        </div>
        <form className="glass rounded-2xl p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm outline-none transition focus:border-cyan-300/60"
              placeholder="Nombre"
            />
            <input
              className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm outline-none transition focus:border-cyan-300/60"
              placeholder="Correo"
            />
            <input
              className="sm:col-span-2 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm outline-none transition focus:border-cyan-300/60"
              placeholder="Asunto"
            />
            <textarea
              rows="4"
              className="sm:col-span-2 rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm outline-none transition focus:border-cyan-300/60"
              placeholder="Cuéntame sobre tu proyecto"
            />
          </div>
          <button
            type="button"
            className="mt-5 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:shadow-glow"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </Section>
  );
}
