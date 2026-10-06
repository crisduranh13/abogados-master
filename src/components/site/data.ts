import heroFirma from "@/assets/hero-firma.jpg";
import firmaDocumentos from "@/assets/firma-documentos.jpg";
import arquitectura from "@/assets/arquitectura.jpg";
import salaJuntas from "@/assets/sala-juntas.jpg";
import equipoMariana from "@/assets/equipo-mariana.jpg";
import equipoDaniel from "@/assets/equipo-daniel.jpg";
import equipoAlejandro from "@/assets/equipo-alejandro.jpg";
import derechoLaboralFabrica from "@/assets/derecho-laboral-fabrica.jpg";
import derechoCivilConsulta from "@/assets/derecho-civil-consulta.jpg";

export const WHATSAPP_NUMERO = "523318903307";

const WHATSAPP_MENSAJE = "Me gustaría saber más sobre desrarrollo web";
export const WA_GENERAL = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAJE)}`;

export const imagenes = {
  heroFirma,
  firmaDocumentos,
  arquitectura,
  salaJuntas,
  equipoMariana,
  equipoDaniel,
  equipoAlejandro,
  derechoLaboralFabrica,
  derechoCivilConsulta,
};

/**
 * Clips de stock de uso comercial libre (Pexels).
 * Para sustituirlos: cambia la URL por la del video propio de la firma.
 */
export const videos = {
  reunion: "https://videos.pexels.com/video-files/3196036/3196036-hd_1920_1080_25fps.mp4",
  // https://www.pexels.com/video/factory-workers-15459709/
  fabrica: "https://videos.pexels.com/video-files/15459709/15459709-hd_1920_1080_24fps.mp4",
  // https://www.pexels.com/video/meeting-with-the-client-4434066/
  consultaCivil: "https://videos.pexels.com/video-files/4434066/4434066-hd_1920_1080_25fps.mp4",
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
  telefono: "+52 33 1890 3307",
  correo: "contacto@higuerafernandez.mx",
  horario: "Lunes a viernes de 9:00 a 19:00 h · Sábados de 10:00 a 14:00 h",
};
