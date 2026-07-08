"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  ClipboardCheck,
  Menu,
  MapPin,
  MessageCircle,
  ShieldCheck,
  X,
} from "lucide-react";
import { publicPath } from "@/lib/public-path";

const navItems = [
  { label: "Servicios", href: "#investigacion-y-verificacion" },
  {
    label: "Becas",
    href: "https://www.avancesoluciones.com.mx/becas2020/form_solicitud_sin/form_solicitud_sin.php",
  },
];

const proofItems = [
  { icon: MapPin, label: "Cobertura nacional" },
  { icon: ShieldCheck, label: "Perfil verificado" },
  { icon: ClipboardCheck, label: "Reporte en 72h" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MenuIcon = isMenuOpen ? X : Menu;

  return (
    <header
      className={`site-header${isMenuOpen ? " is-menu-open" : ""}`}
      aria-label="Navegación principal"
    >
      <a className="brand" href="#" aria-label="Avance Soluciones">
        <Image
          src={publicPath("/images/avance/logo-de-avance.webp")}
          alt="Avance Soluciones"
          width={170}
          height={90}
          priority
        />
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <MenuIcon size={22} strokeWidth={1.9} aria-hidden="true" />
      </button>

      <nav
        className="main-nav"
        id="main-navigation"
        aria-label="Menú principal"
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
          >
            <span>{item.label}</span>
          </a>
        ))}
      </nav>

      <a className="client-button" href="#contacto">
        <ArrowRight size={20} strokeWidth={1.75} aria-hidden="true" />
        <span>Solicitar cotización</span>
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
          <h1 id="hero-title">
            Estudios
            <br className="hero-title-break" />
            <span className="hero-title-line">
              <span className="hero-title-main">Socioeconómicos</span> y
              Sociolaborales
            </span>
          </h1>
          <p className="hero-service-title">
            Contrata con <span>confianza</span>
          </p>
          <p className="hero-intro">
            Te ayudamos a validar información clave de tus candidatos con
            reportes profesionales, cobertura nacional y respuesta en 72 horas
            hábiles.
          </p>

          <div className="proof-row" aria-label="Beneficios">
            {proofItems.map(({ icon: Icon, label }) => (
              <article className="proof-card" key={label}>
                <Icon size={35} strokeWidth={1.7} aria-hidden="true" />
                <span>{label}</span>
              </article>
            ))}
          </div>

          <div className="hero-actions" aria-label="Acciones principales">
            <a className="quote-button" href="#contacto">
              <ArrowRight size={24} strokeWidth={1.8} aria-hidden="true" />
              <span>Solicitar cotización</span>
            </a>
            <a className="whatsapp-button" href="#contacto">
              <MessageCircle size={24} strokeWidth={1.9} aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>

          <p className="hero-assurance">
            <ShieldCheck size={18} strokeWidth={1.8} aria-hidden="true" />
            <span>Seguridad, confidencialidad y cumplimiento garantizados.</span>
          </p>
        </div>

        <div className="hero-visual" aria-label="Reporte de verificación">
          <img
            className="asset asset-mexico"
            src={publicPath("/images/avance/Reduzca_riesgos/Reduzca_riesgos_-_Mexico.webp")}
            alt=""
            width={1448}
            height={1086}
          />
          <div className="document-base" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <img
            className="asset asset-profile"
            src={publicPath("/images/avance/Reduzca_riesgos/Reduzca_riesgos_-_perfil.webp")}
            alt="Perfil verificado con identidad, domicilio, historial laboral y referencias"
            width={1122}
            height={1402}
          />
          <img
            className="asset asset-report"
            src={publicPath("/images/avance/Reduzca_riesgos/Reduzca_riesgos_-_reporte.webp")}
            alt="Reporte integral con riesgo bajo"
            width={1122}
            height={1402}
          />
          <img
            className="asset asset-document"
            src={publicPath("/images/avance/Reduzca_riesgos/Reduzca_riesgos_-_documentacion.webp")}
            alt="Documentación verificada"
            width={1122}
            height={1402}
          />
          <img
            className="asset asset-shield"
            src={publicPath("/images/avance/Reduzca_riesgos/Reduzca_riesgos_-_escudo.webp")}
            alt=""
            width={1254}
            height={1254}
          />
        </div>
      </div>
    </section>
  );
}
