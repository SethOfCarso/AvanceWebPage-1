"use client";

import Image from "next/image";
import styles from "./becas-section.module.css";

const becasBase = "/images/avance/Becas";

const benefits = [
  {
    label: "Proceso ordenado",
    icon: "/images/avance/iconos/Icono_documento_listo.webp",
  },
  {
    label: "Información clara",
    icon: "/images/avance/iconos/Icono_documento_listo.webp",
  },
  {
    label: "Atención profesional",
    icon: "/images/avance/iconos/Icono_documento_listo.webp",
  },
];

export function BecasSection() {
  return (
    <section className={styles.section} id="becas" aria-labelledby="becas-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <Image
              src="/images/avance/iconos/Icono_documento_listo.webp"
              alt=""
              width={1254}
              height={1254}
              loading="lazy"
            />
            <span>Soluciones complementarias</span>
          </p>

          <h2 className={styles.title} id="becas-title">
            Becas <span>escolares</span>
          </h2>
          <p className={styles.lead}>
            Apoyo en procesos de validación y revisión con una presentación
            clara y profesional.
          </p>

          <div className={styles.benefits} aria-label="Beneficios de becas escolares">
            {benefits.map((benefit) => (
              <article className={styles.benefit} key={benefit.label}>
                <span className={styles.benefitIcon} aria-hidden="true">
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
            className={styles.people}
            src={`${becasBase}/Becas_-_Becas_personas.webp`}
            alt=""
            width={1122}
            height={1402}
            loading="lazy"
          />
          <Image
            className={styles.docCard}
            src={`${becasBase}/Becas_-_Documentos_verificados.webp`}
            alt=""
            width={1122}
            height={1402}
            loading="lazy"
          />
          <Image
            className={styles.evaluation}
            src={`${becasBase}/Becas_-Evaluacion_Integral.webp`}
            alt=""
            width={1448}
            height={1086}
            loading="lazy"
          />
          <Image
            className={styles.process}
            src={`${becasBase}/Becas_-_Proceso_de_becas.webp`}
            alt=""
            width={2172}
            height={724}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
