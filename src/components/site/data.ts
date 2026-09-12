import heroFirma from "@/assets/hero-firma.jpg";
import firmaDocumentos from "@/assets/firma-documentos.jpg";
import arquitectura from "@/assets/arquitectura.jpg";
import salaJuntas from "@/assets/sala-juntas.jpg";
import equipoMariana from "@/assets/equipo-mariana.jpg";
import equipoDaniel from "@/assets/equipo-daniel.jpg";
import equipoAlejandro from "@/assets/equipo-alejandro.jpg";

/** Reemplaza este número por el real de la firma (formato internacional, sin signos). */
export const WHATSAPP_NUMERO = "523300000000";

export const waLink = (mensaje: string) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;

export const WA_GENERAL = waLink(
  "Hola, me gustaría recibir asesoría legal de Higuera & Fernández.",
);

export const imagenes = {
  heroFirma,
  firmaDocumentos,
  arquitectura,
  salaJuntas,
  equipoMariana,
  equipoDaniel,
  equipoAlejandro,
};

/**
 * Clips de stock de uso comercial libre (Pexels).
 * Para sustituirlos: cambia la URL por la del video propio de la firma.
 */
export const videos = {
  reunion: "https://videos.pexels.com/video-files/3196036/3196036-hd_1920_1080_25fps.mp4",
  ciudad: "https://videos.pexels.com/video-files/3141210/3141210-hd_1920_1080_25fps.mp4",
  oficina: "https://videos.pexels.com/video-files/3255275/3255275-hd_1920_1080_25fps.mp4",
  documentos: "https://videos.pexels.com/video-files/3205618/3205618-hd_1920_1080_25fps.mp4",
  estrategia: "https://videos.pexels.com/video-files/3205401/3205401-hd_1920_1080_25fps.mp4",
  despacho: "https://videos.pexels.com/video-files/6774633/6774633-hd_1920_1080_30fps.mp4",
};

export const navegacion = [
  { label: "Inicio", href: "#inicio" },
  { label: "Firma", href: "#firma" },
  { label: "Servicios", href: "#servicios" },
  { label: "Casos", href: "#casos" },
  { label: "Equipo", href: "#equipo" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Contacto", href: "#contacto" },
];

export const contacto = {
  direccion: "Av. Américas 1545, piso 7, Col. Providencia, 44630 Guadalajara, Jalisco",
  telefono: "+52 33 0000 0000",
  correo: "contacto@higuerafernandez.mx",
  horario: "Lunes a viernes de 9:00 a 19:00 h · Sábados de 10:00 a 14:00 h",
};
