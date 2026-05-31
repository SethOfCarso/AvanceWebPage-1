"use client";

import Image from "next/image";
import { publicPath } from "@/lib/public-path";
import styles from "./cobertura-section.module.css";

const coberturaBase = publicPath("/images/avance/Cobertura");

const miniBenefits = [
  {
    label: "Atención profesional",
    icon: publicPath("/images/avance/iconos/Icono_personas.svg"),
  },
  {
    label: "Cobertura nacional",
    icon: publicPath("/images/avance/iconos/Icono_lugar.svg"),
  },
  {
    label: "Respuesta ágil",
    icon: publicPath("/images/avance/iconos/Icono_documento_listo.svg"),
  },
];

const stats = [
  {
    value: "32",
    label: "Estados cubiertos",
    icon: publicPath("/images/avance/iconos/icono_oficina.svg"),
  },
  {
    value: "+2,500",
    label: "Municipios alcanzados",
    icon: publicPath("/images/avance/iconos/Icono_lugar.svg"),
  },
  {
    value: "Equipo nacional",
    label: "Especialistas en todo el país",
    icon: publicPath("/images/avance/iconos/Icono_muchas_personas.svg"),
  },
  {
    value: "72 h",
    label: "Respuesta en tiempo récord",
    icon: publicPath("/images/avance/iconos/Icono_tiempo.svg"),
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
              src={publicPath("/images/avance/iconos/Icono_lugar.svg")}
              alt=""
              width={1254}
              height={1254}
              loading="lazy"
            />
            <span>Presencia en todo México</span>
          </p>

          <h2 className={styles.title} id="cobertura-title">
            Cobertura <span>nacional</span>
          </h2>
          <p className={styles.lead}>
            Atendemos solicitudes en toda la República con respuesta en{" "}
            <strong>72 horas hábiles.</strong>
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
