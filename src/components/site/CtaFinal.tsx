import { MessageCircle } from "lucide-react";

import { BackgroundVideo } from "./BackgroundVideo";
import { Reveal } from "./Reveal";
import { imagenes, videos, WA_GENERAL } from "./data";

export function CtaFinal() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <BackgroundVideo src={videos.estrategia} poster={imagenes.salaJuntas} overlay="strong" />
      <div className="absolute inset-0 bg-ink/72" />

      <div className="shell section-pad relative text-center">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="display-lg text-ink-foreground text-balance">
            Tu situación legal merece atención profesional.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-foreground/85">
            Hablemos por WhatsApp y conoce cómo puede ayudarte Higuera &amp; Fernández.
          </p>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-wa mt-9 h-14 min-h-14 px-8 text-base"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Solicitar asesoría legal
          </a>
        </Reveal>
      </div>
    </section>
  );
}
