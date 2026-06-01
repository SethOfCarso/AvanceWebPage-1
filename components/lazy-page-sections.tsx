import { BecasSection } from "@/components/becas-section";
import { CoberturaSection } from "@/components/cobertura-section";
import { ContactoSection } from "@/components/contacto-section";
import { InvestigacionYVerificacion } from "@/components/investigacion-y-verificacion";
import { NosotrosSection } from "@/components/nosotros-section";
import { Respuesta72Section } from "@/components/respuesta-72-section";

export function LazyPageSections() {
  return (
    <>
      <Respuesta72Section />
      <CoberturaSection />
      <InvestigacionYVerificacion />
      <BecasSection />
      <NosotrosSection />
      <ContactoSection />
    </>
  );
}
