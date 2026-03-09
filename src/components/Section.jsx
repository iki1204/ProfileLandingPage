import { motion } from "framer-motion";

export default function Section({ id, title, description, children }) {
  return (
    <motion.section
      id={id}
      className="mx-auto w-full max-w-7xl py-20 "
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mb-10 max-w-3xl">
        <h2 className="section-title">{title}</h2>
        {description ? (
          <p className="mt-4 text-slate-300">{description}</p>
        ) : null}
      </div>
      {children}
    </motion.section>
  );
}
