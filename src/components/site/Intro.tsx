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

        <Reveal
          delay={120}
          className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-6 lg:pt-4"
        >
          <p>
            Higuera &amp; Fernández es un despacho legal enfocado en acompañar a sus clientes con
            profesionalismo, claridad y estrategia. Traducimos el lenguaje jurídico a decisiones
            entendibles, para que cada persona sepa en qué punto está su asunto y qué sigue.
          </p>
          <p className="border-l-2 border-accent pl-5 font-display text-xl italic text-primary">
            Este es un EJEMPLO de un web que puede ser para tu Firma de Abogados, poniendo los
            servicios que quieres impulsar, tus especialidades, tu proceso de trabajo, un Web es tu
            Carta Presentación.
          </p>
          <p>
            Tu web con tu estilo, bajo el diseño que tu quieres eso hacemos en{" "}
            <a
              href="https://vende24siete.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:text-ink"
            >
              Vende24Siete.com
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
