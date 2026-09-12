import { Reveal } from "./Reveal";

const resenas = [
  {
    texto:
      "Explicaron mi situación laboral en términos que entendí desde la primera reunión. Nunca me dejaron sin respuesta.",
    autor: "Cliente particular",
    detalle: "Asunto laboral",
  },
  {
    texto:
      "Revisaron todos nuestros contratos y nos ayudaron a ordenar la parte legal de la empresa antes de crecer.",
    autor: "Empresa de servicios",
    detalle: "Asesoría corporativa",
  },
  {
    texto:
      "Me acompañaron en un proceso complicado con mucha claridad y respeto. Se agradece el trato humano.",
    autor: "Cliente particular",
    detalle: "Asunto civil",
  },
];

export function Resenas() {
  return (
    <section id="resenas" className="section-pad bg-sand">
      <div className="shell">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Reseñas</p>
            <h2 className="display-lg mt-5 text-ink text-balance">
              Lo que valoran quienes trabajan con la firma.
            </h2>
          </div>
          <p className="rounded-full border border-ink/20 px-4 py-2 text-xs font-semibold tracking-wide text-ink/70">
            Testimonios demostrativos para fines de esta demo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {resenas.map((r, i) => (
            <Reveal key={r.autor + i} delay={i * 110}>
              <figure className="flex h-full flex-col justify-between rounded-sm bg-card p-8 transition-transform duration-500 hover:-translate-y-1">
                <blockquote className="font-display text-xl leading-snug text-ink">
                  “{r.texto}”
                </blockquote>
                <figcaption className="mt-8 border-t border-border pt-5 text-sm">
                  <span className="font-semibold text-ink">{r.autor}</span>
                  <span className="block text-muted-foreground">{r.detalle}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
