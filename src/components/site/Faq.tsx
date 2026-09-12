import { Reveal } from "./Reveal";

export const faqs = [
  {
    pregunta: "¿Atienden a personas y empresas?",
    respuesta:
      "Sí. Trabajamos tanto con personas y familias como con empresas de distintos tamaños en Guadalajara y su zona metropolitana.",
  },
  {
    pregunta: "¿Puedo recibir orientación inicial por WhatsApp?",
    respuesta:
      "Sí. Puedes escribirnos por WhatsApp, contarnos brevemente tu situación y te decimos cómo podemos ayudarte y cuál sería el siguiente paso.",
  },
  {
    pregunta: "¿Qué áreas legales manejan?",
    respuesta:
      "Derecho laboral, penal, civil y mercantil, además de asesoría corporativa y elaboración o revisión de contratos.",
  },
  {
    pregunta: "¿Cómo puedo agendar una consulta?",
    respuesta:
      "Escríbenos por WhatsApp o llámanos. Coordinamos una cita en oficina o una videollamada según te resulte más práctico.",
  },
  {
    pregunta: "¿La firma atiende asuntos fuera de Guadalajara?",
    respuesta:
      "Podemos valorar asuntos en otras ciudades y, cuando corresponde, trabajar de forma coordinada para darles seguimiento.",
  },
];

export function Faq() {
  return (
    <section className="section-pad bg-secondary">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 className="display-lg mt-5 text-ink text-balance">Dudas antes de escribirnos.</h2>
        </Reveal>

        <div className="lg:col-span-8">
          {faqs.map((f, i) => (
            <Reveal key={f.pregunta} delay={i * 70}>
              <details className="group border-b border-border py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-xl text-ink marker:hidden">
                  {f.pregunta}
                  <span className="relative size-5 shrink-0">
                    <span className="absolute left-0 top-1/2 h-px w-5 bg-ink" />
                    <span className="absolute left-1/2 top-0 h-5 w-px bg-ink transition-transform duration-300 group-open:rotate-90 group-open:opacity-0" />
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
                  {f.respuesta}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
