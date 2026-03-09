import { enlacesNav } from './data'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#inicio" className="font-['Space_Grotesk'] text-lg font-bold tracking-wide text-white">
          IKIAN.SAA
        </a>
        <ul className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {enlacesNav.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="transition hover:text-cyan-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contacto"
          className="rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/10"
        >
          Hablemos
        </a>
      </nav>
    </header>
  )
}
