import { BackgroundVideo } from "./BackgroundVideo";
import { Reveal } from "./Reveal";
import { imagenes, videos } from "./data";

const casos = [
  {
    titulo: "Conflictos laborales",
    texto: "Negociación, defensa y cumplimiento de obligaciones entre empresas y colaboradores.",
  },
  {
    titulo: "Defensa y asesoría penal",
    texto:
      "Acompañamiento técnico en cada etapa, con información clara sobre el estado del asunto.",
  },
  {
    titulo: "Arrendamientos y controversias civiles",
    texto:
      "Revisión de contratos, incumplimientos y soluciones para recuperar la certeza jurídica.",
  },
  {
    titulo: "Elaboración y revisión de contratos",
    texto: "Documentos redactados con precisión para evitar interpretaciones costosas.",
  },
  {
    titulo: "Conflictos entre socios",
    texto: "Mediación y estrategia legal cuando la relación societaria requiere orden.",
  },
  {
    titulo: "Cobranza y cumplimiento mercantil",
    texto: "Acciones para exigir el cumplimiento de obligaciones comerciales.",
  },
];

export function Casos() {
  return (
    <section id="casos" className="relative isolate overflow-hidden bg-ink">
      <BackgroundVideo src={videos.ciudad} poster={imagenes.arquitectura} overlay="strong" />
      <div className="absolute inset-0 bg-ink/70" />

      <div className="shell section-pad relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-ink-foreground/70">Enfoques de trabajo</p>
          <h2 className="display-lg mt-5 text-ink-foreground text-balance">
            Acompañamos situaciones legales que exigen claridad y acción.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-ink-foreground/80">
            Estos son ejemplos de los asuntos en los que acompañamos habitualmente a nuestros
            clientes. Cada caso se valora de forma individual; no ofrecemos resultados garantizados,
            sino trabajo profesional y comunicación honesta.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {casos.map((c, i) => (
            <Reveal
              as="li"
              key={c.titulo}
              delay={(i % 3) * 80}
              className="bg-ink/80 p-7 backdrop-blur-sm transition-colors duration-500 hover:bg-ink/60"
            >
              <span className="font-display text-sm text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl text-ink-foreground">{c.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-foreground/75">{c.texto}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
