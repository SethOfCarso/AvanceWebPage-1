import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  ClipboardCheck,
  MapPin,
  MessageCircle,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const navItems = ["Soluciones", "Cobertura", "Empresa", "Recursos", "Contacto"];

const proofItems = [
  { icon: ShieldCheck, label: "18 anos de experiencia" },
  { icon: MapPin, label: "Cobertura nacional" },
  { icon: ClipboardCheck, label: "Reportes claros" },
];

export function Header() {
  return (
    <header className="site-header" aria-label="Navegacion principal">
      <a className="brand" href="#" aria-label="Avance Soluciones">
        <span className="brand-mark">AVS</span>
        <span className="brand-name">
          Avance
          <br />
          Soluciones
        </span>
      </a>

      <nav className="main-nav" aria-label="Menu principal">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            <span>{item}</span>
            {item === "Soluciones" ? (
              <ChevronDown size={16} strokeWidth={1.8} aria-hidden="true" />
            ) : null}
          </a>
        ))}
      </nav>

      <a className="client-button" href="#contacto">
        <UserRound size={20} strokeWidth={1.75} aria-hidden="true" />
        <span>Area de clientes</span>
      </a>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
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
            src="/images/avance/riesgos/mexico.png"
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
            src="/images/avance/riesgos/perfil.png"
            alt="Perfil verificado con identidad, domicilio, historial laboral y referencias"
            width={1122}
            height={1402}
            priority
          />
          <Image
            className="asset asset-report"
            src="/images/avance/riesgos/reporte.png"
            alt="Reporte integral con riesgo bajo"
            width={1122}
            height={1402}
            priority
          />
          <Image
            className="asset asset-document"
            src="/images/avance/riesgos/documentacion.png"
            alt="Documentacion verificada"
            width={1122}
            height={1402}
            priority
          />
          <Image
            className="asset asset-shield"
            src="/images/avance/riesgos/escudo.png"
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
