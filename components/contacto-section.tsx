"use client";

import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import styles from "./contacto-section.module.css";

export function ContactoSection() {
  return (
    <section className={styles.section} id="contacto" aria-labelledby="contacto-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Hablemos</p>
          <h2 className={styles.title} id="contacto-title">
            Solicite una <span>cotizacion</span>
          </h2>
          <p className={styles.lead}>
            Conozca como AVS Avance Soluciones puede apoyar a su empresa con
            informacion clara y atencion profesional.
          </p>

          <div className={styles.actions} aria-label="Opciones de contacto">
            <a className={styles.primary} href="https://wa.me/523318922770">
              <ArrowRight size={28} strokeWidth={1.8} aria-hidden="true" />
              <span>Solicitar cotizacion</span>
            </a>
            <a className={styles.secondary} href="mailto:contacto@avancesoluciones.com.mx">
              <Mail size={31} strokeWidth={1.8} aria-hidden="true" />
              <span>Enviar correo</span>
            </a>
          </div>

          <div className={styles.trustLine}>
            <span className={styles.trustIcon} aria-hidden="true">
              <Image
                src="/images/avance/iconos/Icono_escudo.webp"
                alt=""
                width={1254}
                height={1254}
                loading="lazy"
              />
            </span>
            <span>Respuesta profesional y cercana</span>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <Image
            className={styles.shield}
            src="/images/avance/riesgos/escudo.webp"
            alt=""
            width={1254}
            height={1254}
            loading="lazy"
          />
          <Image
            className={styles.whatsapp}
            src="/images/avance/Contacto/Contacto_-_whats_1.webp"
            alt=""
            width={1672}
            height={941}
            loading="lazy"
          />
          <Image
            className={styles.email}
            src="/images/avance/Contacto/Contact_-_correo.webp"
            alt=""
            width={1672}
            height={941}
            loading="lazy"
          />
          <Image
            className={styles.info}
            src="/images/avance/Contacto/Contacto_-_Informacion.webp"
            alt=""
            width={1916}
            height={821}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
