"use client";

import dynamic from "next/dynamic";
import { LazySectionFallback } from "@/components/lazy-section-fallback";

const Respuesta72Section = dynamic(
  () =>
    import("@/components/respuesta-72-section").then(
      (module) => module.Respuesta72Section,
    ),
  {
    loading: () => <LazySectionFallback />,
    ssr: false,
  },
);

const BecasSection = dynamic(
  () =>
    import("@/components/becas-section").then((module) => module.BecasSection),
  {
    loading: () => <LazySectionFallback />,
    ssr: false,
  },
);

const CoberturaSection = dynamic(
  () =>
    import("@/components/cobertura-section").then(
      (module) => module.CoberturaSection,
    ),
  {
    loading: () => <LazySectionFallback />,
    ssr: false,
  },
);

const InvestigacionYVerificacion = dynamic(
  () =>
    import("@/components/investigacion-y-verificacion").then(
      (module) => module.InvestigacionYVerificacion,
    ),
  {
    loading: () => <LazySectionFallback />,
    ssr: false,
  },
);

const NosotrosSection = dynamic(
  () =>
    import("@/components/nosotros-section").then(
      (module) => module.NosotrosSection,
    ),
  {
    loading: () => <LazySectionFallback />,
    ssr: false,
  },
);

const ContactoSection = dynamic(
  () =>
    import("@/components/contacto-section").then(
      (module) => module.ContactoSection,
    ),
  {
    loading: () => <LazySectionFallback />,
    ssr: false,
  },
);

export function LazyPageSections() {
  return (
    <>
      <Respuesta72Section />
      <BecasSection />
      <CoberturaSection />
      <InvestigacionYVerificacion />
      <NosotrosSection />
      <ContactoSection />
    </>
  );
}
