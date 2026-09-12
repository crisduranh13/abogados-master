import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { navegacion, WA_GENERAL } from "./data";

export function Header() {
  const [abierto, setAbierto] = useState(false);
  const [compacto, setCompacto] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompacto(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        compacto || abierto
          ? "border-b border-border/70 bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="shell flex h-[4.75rem] items-center justify-between gap-6">
        <a
          href="#inicio"
          onClick={() => setAbierto(false)}
          className={cn(
            "font-display text-[1.05rem] tracking-tight transition-colors md:text-[1.2rem]",
            compacto || abierto ? "text-ink" : "text-ink-foreground",
          )}
        >
          Higuera <span className="text-accent">&amp;</span> Fernández
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">
          {navegacion.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                compacto
                  ? "text-muted-foreground hover:text-ink"
                  : "text-ink-foreground/80 hover:text-ink-foreground",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-wa hidden h-11 min-h-11 text-sm sm:inline-flex"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Hablar por WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-full border transition-colors lg:hidden",
              compacto || abierto
                ? "border-border text-ink"
                : "border-white/40 text-ink-foreground",
            )}
          >
            {abierto ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {abierto ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Navegación móvil" className="shell flex flex-col py-4">
            {navegacion.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setAbierto(false)}
                className="border-b border-border/60 py-4 font-display text-xl text-ink last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-wa mt-5 w-full"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Hablar por WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
