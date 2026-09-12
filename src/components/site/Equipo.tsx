import { Reveal } from "./Reveal";
import { imagenes } from "./data";

const equipo = [
  {
    nombre: "Lic. Mariana Higuera",
    area: "Laboral y corporativo",
    bio: "Enfocada en la relación entre empresas y colaboradores, la prevención de conflictos y la negociación de acuerdos claros.",
    foto: imagenes.equipoMariana,
  },
  {
    nombre: "Lic. Daniel Fernández",
    area: "Penal y litigio",
    bio: "Dedicado a la defensa técnica y al análisis detallado de expedientes, con una comunicación directa y prudente con cada cliente.",
    foto: imagenes.equipoDaniel,
  },
  {
    nombre: "Lic. Alejandro Torres",
    area: "Civil y mercantil",
    bio: "Trabaja en contratos, arrendamientos y controversias comerciales, buscando siempre la vía más eficiente para resolver.",
    foto: imagenes.equipoAlejandro,
  },
];

export function Equipo() {
  return (
    <section id="equipo" className="section-pad bg-secondary">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Equipo legal</p>
          <h2 className="display-lg mt-5 text-ink text-balance">
            Personas detrás de cada estrategia.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {equipo.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 110}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                  <img
                    src={p.foto}
                    alt={`Retrato profesional de ${p.nombre}`}
                    width={912}
                    height={1104}
                    loading="lazy"
                    decoding="async"
                    className="media-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl text-ink">{p.nombre}</h3>
                <p className="mt-1 text-sm font-semibold tracking-wide text-primary">{p.area}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
