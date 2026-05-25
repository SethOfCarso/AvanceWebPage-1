"use client";

import Image from "next/image";
import styles from "./cobertura-section.module.css";

const coberturaBase = "/images/avance/Cobertura";

const miniBenefits = [
  {
    label: "Atencion profesional",
    icon: "/images/avance/iconos/Icono_personas.webp",
  },
  {
    label: "Cobertura nacional",
    icon: "/images/avance/iconos/Icono_lugar.webp",
  },
  {
    label: "Respuesta agil",
    icon: "/images/avance/iconos/Icono_documento_listo.webp",
  },
];

const stats = [
  {
    value: "32",
    label: "Estados cubiertos",
    icon: "/images/avance/iconos/icono_oficina.webp",
  },
  {
    value: "+2,500",
    label: "Municipios alcanzados",
    icon: "/images/avance/iconos/Icono_lugar.webp",
  },
  {
    value: "Equipo nacional",
    label: "Especialistas en todo el pais",
    icon: "/images/avance/iconos/Icono_muchas_personas.webp",
  },
  {
    value: "72 h",
    label: "Respuesta en tiempo record",
    icon: "/images/avance/iconos/Icono_tiempo.webp",
  },
];

export function CoberturaSection() {
  return (
    <section
      className={styles.section}
      id="cobertura"
      aria-labelledby="cobertura-title"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <Image
              src="/images/avance/iconos/Icono_lugar.webp"
              alt=""
              width={1254}
              height={1254}
              loading="lazy"
            />
            <span>Presencia en todo Mexico</span>
          </p>

          <h2 className={styles.title} id="cobertura-title">
            Cobertura <span>nacional</span>
          </h2>
          <p className={styles.lead}>
            Atendemos solicitudes en toda la Republica con respuesta en{" "}
            <strong>72 horas habiles.</strong>
          </p>

          <div className={styles.miniBenefits} aria-label="Beneficios de cobertura">
            {miniBenefits.map((benefit) => (
              <article className={styles.miniBenefit} key={benefit.label}>
                <span className={styles.miniIcon} aria-hidden="true">
                  <Image
                    src={benefit.icon}
                    alt=""
                    width={1254}
                    height={1254}
                    loading="lazy"
                  />
                </span>
                <span>{benefit.label}</span>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <span className={styles.dots} />
          <Image
            className={styles.map}
            src={`${coberturaBase}/Cobertura_-_Mexico.webp`}
            alt=""
            width={1448}
            height={1086}
            loading="lazy"
          />
          <Image
            className={styles.hoursCard}
            src={`${coberturaBase}/Cobertura_-_72_horas.webp`}
            alt=""
            width={1254}
            height={1254}
            loading="lazy"
          />
        </div>
      </div>

      <div className={styles.stats} aria-label="Indicadores de cobertura">
        {stats.map((stat) => (
          <article className={styles.stat} key={stat.label}>
            <span className={styles.statIcon} aria-hidden="true">
              <Image
                src={stat.icon}
                alt=""
                width={1254}
                height={1254}
                loading="lazy"
              />
            </span>
            <p>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
