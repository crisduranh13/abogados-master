import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { BackgroundVideo } from "./BackgroundVideo";
import { Reveal } from "./Reveal";
import { contacto, imagenes, videos, WA_GENERAL } from "./data";

export function Contacto() {
  return (
    <section id="contacto" className="section-pad bg-background">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Contacto</p>
          <h2 className="display-lg mt-5 text-ink text-balance">Conversemos sobre tu caso.</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Recibe orientación inicial y conoce cómo puede ayudarte nuestra firma.
          </p>

          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-wa mt-8 w-full sm:w-auto"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Enviar mensaje por WhatsApp
          </a>

          <ul className="mt-10 space-y-5 text-sm">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-muted-foreground">{contacto.direccion}</span>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="text-muted-foreground">{contacto.horario}</span>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={`tel:${contacto.telefono.replace(/\s/g, "")}`}
                className="text-ink hover:text-primary"
              >
                {contacto.telefono}
              </a>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${contacto.correo}`} className="text-ink hover:text-primary">
                {contacto.correo}
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-ink lg:aspect-[4/3.2]">
            <BackgroundVideo src={videos.ciudad} poster={imagenes.arquitectura} overlay="soft" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
              <div className="inline-flex max-w-full flex-col rounded-sm bg-card/95 p-6 backdrop-blur">
                <span className="eyebrow">Oficina</span>
                <span className="mt-2 font-display text-xl text-ink">Providencia, Guadalajara</span>
                <span className="mt-1 text-sm text-muted-foreground">
                  Atención con cita previa. Estacionamiento en el mismo edificio.
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
