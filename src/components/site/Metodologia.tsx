import { Reveal } from "./Reveal";

const pasos = [
  {
    titulo: "Escuchamos tu caso",
    texto: "Una primera conversación para entender qué pasó, qué necesitas y qué urge resolver.",
  },
  {
    titulo: "Analizamos tu situación",
    texto: "Revisamos documentos y antecedentes para identificar riesgos, tiempos y alternativas.",
  },
  {
    titulo: "Diseñamos la estrategia legal",
    texto: "Te presentamos un plan claro, con sus alcances y escenarios posibles, sin promesas vacías.",
  },
  {
    titulo: "Te acompañamos en el proceso",
    texto: "Damos seguimiento puntual y te mantenemos informado en cada etapa del asunto.",
  },
];

export function Metodologia() {
  return (
    <section className="section-pad bg-background">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Metodología</p>
          <h2 className="display-lg mt-5 text-ink text-balance">Así trabajamos contigo.</h2>
        </Reveal>

        <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pasos.map((p, i) => (
            <Reveal as="li" key={p.titulo} delay={i * 100} className="relative pt-8">
              <span className="absolute left-0 top-0 h-px w-full bg-border" />
              <span className="absolute left-0 top-0 h-px w-10 bg-accent" />
              <span className="font-display text-4xl text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl text-ink">{p.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
