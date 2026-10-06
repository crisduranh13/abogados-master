import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { getRequestUrl } from "@tanstack/react-start/server";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { Servicios } from "@/components/site/Servicios";
import { Casos } from "@/components/site/Casos";
import { Firma } from "@/components/site/Firma";
import { Equipo } from "@/components/site/Equipo";
import { Metodologia } from "@/components/site/Metodologia";
import { Resenas } from "@/components/site/Resenas";
import { Contacto } from "@/components/site/Contacto";
import { Faq, faqs } from "@/components/site/Faq";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Footer } from "@/components/site/Footer";
import { Vende24Siete } from "@/components/site/Vende24Siete";
import { contacto } from "@/components/site/data";

const titulo = "Higuera & Fernández | Demo de despacho jurídico";
const descripcion =
  "Higuera & Fernández — Asesoría legal estratégica y personalizada para personas y empresas.";

const getSiteOrigin = createServerFn({ method: "GET" }).handler(() => getRequestUrl().origin);

const datosEstructurados = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      name: "Higuera & Fernández",
      description: descripcion,
      areaServed: "Guadalajara, Jalisco, México",
      priceRange: "$$",
      telephone: contacto.telefono,
      email: contacto.correo,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Américas 1545, piso 7, Col. Providencia",
        addressLocality: "Guadalajara",
        addressRegion: "Jalisco",
        postalCode: "44630",
        addressCountry: "MX",
      },
      openingHours: ["Mo-Fr 09:00-19:00", "Sa 10:00-14:00"],
      knowsAbout: [
        "Derecho laboral",
        "Derecho penal",
        "Derecho civil",
        "Derecho mercantil",
        "Asesoría corporativa",
        "Contratos y prevención legal",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.pregunta,
        acceptedAnswer: { "@type": "Answer", text: f.respuesta },
      })),
    },
  ],
};

export const Route = createFileRoute("/")({
  loader: () => getSiteOrigin(),
  head: ({ loaderData }) => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
      { property: "og:image", content: new URL("/og-image-firma.jpg", loaderData).href },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: new URL("/", loaderData).href },
      { property: "og:locale", content: "es_MX" },
      { property: "og:site_name", content: "Higuera & Fernández" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: titulo },
      { name: "twitter:description", content: descripcion },
      { name: "twitter:image", content: new URL("/og-image-firma.jpg", loaderData).href },
    ],
    links: [{ rel: "canonical", href: new URL("/", loaderData).href }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(datosEstructurados),
      },
    ],
  }),
  component: Inicio,
});

function Inicio() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Servicios />
        <Casos />
        <Firma />
        <Equipo />
        <Metodologia />
        <Resenas />
        <Contacto />
        <Faq />
        <CtaFinal />
      </main>
      <Vende24Siete />
      <Footer />
    </>
  );
}
