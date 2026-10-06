import { ArrowUpRight } from "lucide-react";

import { Reveal } from "./Reveal";

export function Vende24Siete() {
  return (
    <section aria-label="Vende24Siete" className="bg-primary">
      <div className="shell grid gap-10 py-16 lg:grid-cols-12 lg:items-center lg:py-20">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow text-primary-foreground/70">Vende24Siete</p>
          <h2 className="display-md mt-4 text-primary-foreground text-balance">
            Tu firma también puede proyectar este nivel.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-primary-foreground/85">
            Así de bien puede verse la presencia digital de un despacho que quiere generar
            confianza, destacar sus servicios y convertir visitas en nuevos clientes.
          </p>
          <p className="mt-3 max-w-xl leading-relaxed text-primary-foreground/70">
            Creamos demos y experiencias digitales para firmas, clínicas y negocios que quieren
            verse mejor y vender más.
          </p>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-5 lg:justify-self-end">
          <a
            href="https://vende24siete.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base h-14 min-h-14 bg-accent px-8 text-base text-accent-foreground hover:bg-background hover:text-ink"
          >
            Platiquemos de Opciones
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
