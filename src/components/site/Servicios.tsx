import { ArrowUpRight } from "lucide-react";

import { BackgroundVideo } from "./BackgroundVideo";
import { Reveal } from "./Reveal";
import { imagenes, videos, WA_GENERAL } from "./data";

type Servicio = {
  titulo: string;
  texto: string;
  video: string;
  poster: string;
  ancho?: string;
};

const servicios: Servicio[] = [
  {
    titulo: "Derecho laboral",
    texto:
      "Asesoría y representación en despidos, liquidaciones, conflictos con patrones o colaboradores y cumplimiento de obligaciones laborales.",
    video: videos.fabrica,
    poster: imagenes.derechoLaboralFabrica,
    ancho: "lg:col-span-2",
  },
  {
    titulo: "Derecho penal",
    texto:
      "Defensa técnica y acompañamiento en carpetas de investigación, con análisis serio del expediente y una estrategia definida desde el inicio.",
    video: videos.documentos,
    poster: imagenes.firmaDocumentos,
  },
  {
    titulo: "Derecho civil",
    texto:
      "Arrendamientos, sucesiones, incumplimientos y controversias familiares o patrimoniales, con revisión cuidadosa de cada documento.",
    video: videos.consultaCivil,
    poster: imagenes.derechoCivilConsulta,
  },
  {
    titulo: "Derecho mercantil",
    texto:
      "Conflictos entre socios, cobranza, cumplimiento de obligaciones y negociación entre empresas con enfoque práctico.",
    video: videos.oficina,
    poster: imagenes.salaJuntas,
  },
  {
    titulo: "Asesoría corporativa",
    texto:
      "Acompañamiento continuo a empresas: gobierno interno, decisiones societarias y apoyo legal en operaciones del día a día.",
    video: videos.estrategia,
    poster: imagenes.salaJuntas,
  },
  {
    titulo: "Contratos y prevención legal",
    texto:
      "Elaboración y revisión de contratos para reducir riesgos antes de que se conviertan en conflictos costosos.",
    video: videos.documentos,
    poster: imagenes.firmaDocumentos,
    ancho: "md:col-span-2 lg:col-span-3",
  },
];

export function Servicios() {
  return (
    <section id="servicios" className="section-pad bg-secondary">
      <div className="shell">
        <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Servicios</p>
            <h2 className="display-lg mt-5 text-ink text-balance">
              Áreas de práctica con enfoque estratégico.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Aquí pondremos tus servicios</p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s, i) => (
            <Reveal key={s.titulo} delay={(i % 3) * 90} className={s.ancho ?? ""}>
              <article className="group relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden rounded-sm bg-ink">
                <BackgroundVideo src={s.video} poster={s.poster} overlay="strong" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                <div className="relative p-7 md:p-9">
                  <h3 className="display-md text-ink-foreground">{s.titulo}</h3>
                  <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-ink-foreground/80">
                    {s.texto}
                  </p>
                  <a
                    href={WA_GENERAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-6 text-ink-foreground"
                  >
                    Conocer más
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
