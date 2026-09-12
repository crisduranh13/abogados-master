import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section className="section-pad bg-background">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow">La firma</p>
          <h2 className="display-lg mt-5 text-ink text-balance">
            Una firma legal que combina experiencia, criterio y atención cercana.
          </h2>
        </Reveal>

        <Reveal delay={120} className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:pt-4">
          <p>
            Higuera &amp; Fernández es un despacho legal enfocado en acompañar a sus clientes con
            profesionalismo, claridad y estrategia. Traducimos el lenguaje jurídico a decisiones
            entendibles, para que cada persona sepa en qué punto está su asunto y qué sigue.
          </p>
          <p>
            Atendemos a personas, familias y empresas en distintas áreas del derecho, con un trabajo
            ordenado, comunicación constante y criterios claros desde la primera conversación.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
