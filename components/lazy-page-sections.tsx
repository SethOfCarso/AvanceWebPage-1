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

export function LazyPageSections() {
  return (
    <>
      <Respuesta72Section />
    </>
  );
}
