import { BackgroundVideo } from "./BackgroundVideo";
import { Reveal } from "./Reveal";
import { imagenes, videos } from "./data";

const distintivos = [
  "Más de 10 años de experiencia",
  "Atención a personas y empresas",
  "Enfoque estratégico y personalizado",
  "Presencia en Guadalajara",
  "Comunicación clara durante todo el proceso",
];

export function Firma() {
  return (
    <section id="firma" className="section-pad bg-background">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary">
            <BackgroundVideo
              src={videos.despacho}
              poster={imagenes.firmaDocumentos}
              overlay="none"
            />
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <p className="eyebrow">Sobre la firma</p>
          <h2 className="display-lg mt-5 text-ink text-balance">
            Más de 10 años construyendo confianza jurídica.
          </h2>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Somos un equipo comprometido con brindar asesoría clara, representación profesional y
              soluciones prácticas. Trabajamos con orden, criterio y una comunicación que no deja al
              cliente adivinando.
            </p>
            <p>
              Creemos que un buen abogado también explica: por eso cada estrategia se plantea con sus
              alcances, sus tiempos y sus escenarios reales.
            </p>
          </div>

          <ul className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {distintivos.map((d) => (
              <li
                key={d}
                className="bg-card px-6 py-5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-sand"
              >
                {d}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
