import { ArrowDown, MessageCircle } from "lucide-react";

import { BackgroundVideo } from "./BackgroundVideo";
import { Reveal } from "./Reveal";
import { imagenes, videos, WA_GENERAL } from "./data";

const señales = [
  "Más de 10 años de experiencia",
  "Atención personalizada",
  "Firma legal en Guadalajara",
  "Asesoría para personas y empresas",
];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[92svh] overflow-hidden">
      <BackgroundVideo src={videos.reunion} poster={imagenes.heroFirma} overlay="strong" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/60" />

      <div className="shell relative flex min-h-[92svh] flex-col justify-end pb-16 pt-36 md:pb-24">
        <Reveal className="max-w-4xl">
          <p className="eyebrow text-ink-foreground/70">Abogados · Guadalajara, México</p>
          <h1 className="display-xl mt-6 text-ink-foreground text-balance">
            Defensa, estrategia y respaldo legal para decisiones importantes.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-foreground/85">
            Acompañamos a personas y empresas con asesoría jurídica profesional en materia laboral,
            penal, civil y mercantil.
          </p>
        </Reveal>

        <Reveal delay={140} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-wa w-full sm:w-auto"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Solicitar asesoría por WhatsApp
          </a>
          <a href="#servicios" className="btn-base btn-ghost-light w-full sm:w-auto">
            Conocer servicios
            <ArrowDown className="size-4" aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal
          delay={260}
          as="ul"
          className="mt-14 grid gap-x-8 gap-y-4 border-t border-white/20 pt-7 sm:grid-cols-2 lg:grid-cols-4"
        >
          {señales.map((s) => (
            <li key={s} className="flex items-start gap-3 text-sm text-ink-foreground/85">
              <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-accent" />
              {s}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
