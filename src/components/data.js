import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaCloud,
  FaCodeBranch,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiFramer,
  SiVite,
} from "react-icons/si";
import { MdOutlineDevices, MdOutlineDesignServices } from "react-icons/md";

export const enlacesNav = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "habilidades", label: "Habilidades" },
  { id: "servicios", label: "Servicios" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
];

export const habilidades = {
  Frontend: [
    { nombre: "React", icono: FaReact },
    { nombre: "JavaScript", icono: SiJavascript },
    { nombre: "TypeScript", icono: SiTypescript },
    { nombre: "HTML5", icono: FaHtml5 },
    { nombre: "CSS3", icono: FaCss3Alt },
    { nombre: "Tailwind CSS", icono: SiTailwindcss },
    { nombre: "Diseño Responsivo", icono: MdOutlineDevices },
    { nombre: "UI/UX", icono: MdOutlineDesignServices },
  ],
  Backend: [
    { nombre: "Node.js", icono: FaNodeJs },
    { nombre: "Express", icono: SiExpress },
    { nombre: "REST APIs", icono: FaCodeBranch },
    { nombre: "PostgreSQL", icono: SiPostgresql },
    { nombre: "MongoDB", icono: SiMongodb },
  ],
  Otras: [
    { nombre: "Git", icono: FaGitAlt },
    { nombre: "Docker", icono: FaDocker },
    { nombre: "Cloud", icono: FaCloud },
    { nombre: "Framer Motion", icono: SiFramer },
    { nombre: "Vite", icono: SiVite },
  ],
};

export const servicios = [
  {
    titulo: "Desarrollo Web Full Stack",
    descripcion:
      "Aplicaciones web escalables a medida, construidas para crecer con tu negocio.",
  },
  {
    titulo: "Desarrollo Frontend Premium",
    descripcion:
      "Interfaces modernas y fluidas con React y arquitectura de componentes robusta.",
  },
  {
    titulo: "Backend y APIs",
    descripcion:
      "APIs seguras, integraciones confiables y sistemas de datos listos para escalar.",
  },
  {
    titulo: "Optimización de Sitios",
    descripcion:
      "Mejoras de rendimiento, SEO técnico y escalabilidad para resultados sostenibles.",
  },
];

export const proyectos = [
  {
    titulo: "Plataforma de administración de Condominios",
    descripcion:
      "Plataforma de administrativa con dashboard para control por roles y reportes accionables.",
    stack: ["PHP", "Microservicios", "MySQL"],
  },
  {
    titulo: "Suite E-commerce de Alto Rendimiento",
    descripcion:
      "Tienda enfocada en conversión, con CMS headless e integración de APIs externas.",
    stack: ["Strapi", "MySQL", "REST API"],
  },
  {
    titulo: "Landing page para Empresa de Telecomunicaciones",
    descripcion:
      "Landing page corporativa con diseño moderno, optimizada para SEO y rendimiento.",
    stack: ["TypeScript", "Astro", "Tailwind CSS"],
  },
];
