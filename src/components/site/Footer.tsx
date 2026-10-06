import { Facebook, Instagram, Linkedin } from "lucide-react";

import { contacto, navegacion } from "./data";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="shell grid gap-10 py-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-display text-2xl text-ink">
            Higuera <span className="text-accent">&amp;</span> Fernández
          </p>
          <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
            Asesoría y representación legal con claridad, criterio y acompañamiento cercano en
            Guadalajara.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#contacto"
                aria-label={label}
                className="inline-flex size-11 items-center justify-center rounded-full border border-border text-ink transition-colors hover:bg-ink hover:text-ink-foreground"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Navegación secundaria" className="lg:col-span-3">
          <p className="eyebrow">Navegación</p>
          <ul className="mt-5 space-y-3 text-sm">
            {navegacion.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-muted-foreground transition-colors hover:text-ink">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4">
          <p className="eyebrow">Contacto</p>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>{contacto.direccion}</li>
            <li>
              <a
                href={`tel:${contacto.telefono.replace(/\s/g, "")}`}
                className="transition-colors hover:text-ink"
              >
                {contacto.telefono}
              </a>
            </li>
            <li>
              <a href={`mailto:${contacto.correo}`} className="transition-colors hover:text-ink">
                {contacto.correo}
              </a>
            </li>
            <li>{contacto.horario}</li>
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-border py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p>
            © 2026 Demo Web hecho por Vende24Siete. Todos los derechos reservados. - Visita -{" "}
            <a
              href="https://vende24siete.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-ink"
            >
              Vende24Siete.com
            </a>
          </p>
        </div>
        <div className="flex gap-6">
          <a href="#contacto" className="transition-colors hover:text-ink">
            Aviso de privacidad
          </a>
          <a href="#contacto" className="transition-colors hover:text-ink">
            Aviso legal
          </a>
        </div>
      </div>
    </footer>
  );
}
