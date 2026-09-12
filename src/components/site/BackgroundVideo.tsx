import { cn } from "@/lib/utils";

type BackgroundVideoProps = {
  /**
   * Clip stock (uso comercial libre, Pexels). Para cambiarlo, sustituye esta URL
   * por la de tu propio video: sólo se necesita un .mp4 público.
   */
  src: string;
  /** Imagen de respaldo: se muestra mientras carga y si el video no está disponible. */
  poster: string;
  className?: string;
  /** Oscurecimiento para garantizar contraste del texto encima. */
  overlay?: "none" | "soft" | "strong";
};

const overlays: Record<NonNullable<BackgroundVideoProps["overlay"]>, string> = {
  none: "",
  soft: "bg-ink/35",
  strong: "bg-ink/62",
};

/**
 * Microvideo integrado en el layout (HTML5 <video>, sin controles, silencioso).
 * Si el clip no carga, el poster queda visible como fallback coherente.
 */
export function BackgroundVideo({
  src,
  poster,
  className,
  overlay = "soft",
}: BackgroundVideoProps) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <img src={poster} alt="" className="media-cover" loading="lazy" decoding="async" />
      <video
        className="media-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
      />
      {overlay !== "none" ? <div className={cn("absolute inset-0", overlays[overlay])} /> : null}
    </div>
  );
}
