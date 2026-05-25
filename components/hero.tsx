import Image from "next/image";
import {
  ArrowRight,
  ClipboardCheck,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

const navItems = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Becas", href: "#becas" },
  { label: "Servicios", href: "#investigacion-y-verificacion" },
];

const proofItems = [
  { icon: ShieldCheck, label: "18 años de experiencia" },
  { icon: MapPin, label: "Cobertura nacional" },
  { icon: ClipboardCheck, label: "Reportes claros" },
];

export function Header() {
  return (
    <header className="site-header" aria-label="Navegacion principal">
      <a className="brand" href="#" aria-label="Avance Soluciones">
        <Image
          src="/images/avance/logo-de-avance.webp"
          alt="Avance Soluciones"
          width={170}
          height={90}
          priority
        />
      </a>

      <nav className="main-nav" aria-label="Menu principal">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <a className="client-button" href="#contacto">
        <ArrowRight size={20} strokeWidth={1.75} aria-hidden="true" />
        <span>Solicitar cotizacion</span>
      </a>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero" id="soluciones" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <span className="light-line line-one" />
        <span className="light-line line-two" />
        <span className="light-line line-three" />
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Estudios socioeconomicos y sociolaborales</p>
          <h1 id="hero-title">
            Reduzca riesgos
            <span>antes de contratar</span>
          </h1>
          <p className="hero-intro">
            Cobertura nacional, atencion profesional y respuesta en 72 horas
            habiles.
          </p>

          <div className="hero-actions" aria-label="Acciones principales">
            <a className="quote-button" href="#contacto">
              <ArrowRight size={24} strokeWidth={1.8} aria-hidden="true" />
              <span>Solicitar cotizacion</span>
            </a>
            <a className="whatsapp-button" href="#contacto">
              <MessageCircle size={24} strokeWidth={1.9} aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="proof-row" aria-label="Beneficios">
            {proofItems.map(({ icon: Icon, label }) => (
              <article className="proof-card" key={label}>
                <Icon size={35} strokeWidth={1.7} aria-hidden="true" />
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Reporte de verificacion">
          <Image
            className="asset asset-mexico"
            src="/images/avance/riesgos/mexico.webp"
            alt=""
            width={1448}
            height={1086}
            priority
          />
          <div className="document-base" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <Image
            className="asset asset-profile"
            src="/images/avance/riesgos/perfil.webp"
            alt="Perfil verificado con identidad, domicilio, historial laboral y referencias"
            width={1122}
            height={1402}
            priority
          />
          <Image
            className="asset asset-report"
            src="/images/avance/riesgos/reporte.webp"
            alt="Reporte integral con riesgo bajo"
            width={1122}
            height={1402}
            priority
          />
          <Image
            className="asset asset-document"
            src="/images/avance/riesgos/documentacion.webp"
            alt="Documentacion verificada"
            width={1122}
            height={1402}
            priority
          />
          <Image
            className="asset asset-shield"
            src="/images/avance/riesgos/escudo.webp"
            alt=""
            width={1254}
            height={1254}
            priority
          />
        </div>
      </div>
    </section>
  );
}
