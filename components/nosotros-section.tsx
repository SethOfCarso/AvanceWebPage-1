"use client";

import Image from "next/image";
import styles from "./nosotros-section.module.css";

const metrics = [
  {
    value: "18 años",
    label: "de experiencia",
    icon: "/images/avance/iconos/Icono_escudo_defensor.svg",
  },
  {
    value: "72 horas",
    label: "hábiles",
    icon: "/images/avance/iconos/Icono_tiempo.svg",
  },
  {
    value: "Cobertura",
    label: "nacional",
    icon: "/images/avance/iconos/Icono_lugar.svg",
  },
];

const values = [
  {
    label: "Cercanía",
    icon: "/images/avance/iconos/Icono_personas.svg",
  },
  {
    label: "Claridad",
    icon: "/images/avance/iconos/Icono_documento_listo.svg",
  },
  {
    label: "Confianza",
    icon: "/images/avance/iconos/Icono_escudo.svg",
  },
];

export function NosotrosSection() {
  return (
    <section className={styles.section} id="nosotros" aria-labelledby="nosotros-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Por qué AVS</p>
          <h2 className={styles.title} id="nosotros-title">
            18 años ayudando a empresas a contratar
            <span>con mayor seguridad</span>
          </h2>
          <p className={styles.lead}>
            Atención cercana, reportes claros e información verificable para
            decidir con confianza.
          </p>

          <div className={styles.metrics} aria-label="Indicadores de experiencia">
            {metrics.map((metric) => (
              <article className={styles.metric} key={metric.value}>
                <span className={styles.metricIcon} aria-hidden="true">
                  <Image
                    src={metric.icon}
                    alt=""
                    width={1254}
                    height={1254}
                    loading="lazy"
                  />
                </span>
                <p>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </p>
              </article>
            ))}
          </div>

          <div className={styles.values} aria-label="Valores de servicio">
            {values.map((value) => (
              <span className={styles.value} key={value.label}>
                <Image
                  src={value.icon}
                  alt=""
                  width={1254}
                  height={1254}
                  loading="lazy"
                />
                {value.label}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <Image
            className={styles.report}
            src="/images/avance/Nosotros/Nosotros_-_reporte.webp"
            alt=""
            width={971}
            height={1619}
            loading="lazy"
          />
          <Image
            className={styles.risk}
            src="/images/avance/Nosotros/Nosotros_-_semaforo.webp"
            alt=""
            width={1122}
            height={1402}
            loading="lazy"
          />
          <Image
            className={styles.confidence}
            src="/images/avance/Nosotros/Nosotros_-_carta_confianza.webp"
            alt=""
            width={1448}
            height={1086}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
