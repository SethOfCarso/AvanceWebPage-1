import { Header, Hero } from "@/components/hero";
import { LazyPageSections } from "@/components/lazy-page-sections";
import { SiteEffects } from "@/components/site-effects";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://avancesoluciones.com.mx";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "AVS Avance Soluciones",
    url: siteUrl,
    logo: `${siteUrl}/images/avance/logo-de-avance.webp`,
    email: "contacto@avancesoluciones.com.mx",
    telephone: "+52-33-1118-3521",
    areaServed: {
      "@type": "Country",
      name: "México",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "MX",
    },
    serviceType: [
      "Estudios socioeconómicos",
      "Estudios sociolaborales",
      "Investigación de buró de crédito",
      "Investigación de demandas judiciales",
      "Verificación comercial",
      "Validación para becas escolares",
    ],
    description:
      "Estudios socioeconómicos y sociolaborales con cobertura nacional, reportes claros y respuesta en 72 horas hábiles.",
    sameAs: ["https://wa.me/523311183521"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteEffects />
      <Header />
      <main>
        <Hero />
        <LazyPageSections />
      </main>
    </>
  );
}
