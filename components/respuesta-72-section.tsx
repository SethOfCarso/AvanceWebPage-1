"use client";

import Image from "next/image";
import { publicPath } from "@/lib/public-path";
import styles from "./respuesta-72-section.module.css";

const assetBase = publicPath("/images/avance/Respuesta72hrs");

export function Respuesta72Section() {
  return (
    <section
      className={styles.section}
      id="respuesta-72-horas"
      aria-labelledby="respuesta-72-title"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>

          <p className={styles.kicker}>Tiempo de respuesta</p>
          <h2 className={styles.title} id="respuesta-72-title">
            Respuesta en <strong>72</strong> <span>horas hábiles.</span>
          </h2>
          <span className={styles.orangeRule} aria-hidden="true" />
          <p className={styles.lead}>
            Agilidad para procesos de <strong>contratación urgentes.</strong>
          </p>

          <div className={styles.verify}>
            <span className={styles.verifyIcon} aria-hidden="true">
              <Image
                src={publicPath("/images/avance/iconos/Icono_escudo.svg")}
                alt=""
                width={1254}
                height={1254}
                loading="lazy"
              />
            </span>
            <span>Información verificable</span>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <span className={styles.motionLines} />
          <span className={styles.platform} />
          <span className={styles.stepTrack} />

          <Image
            className={styles.clock}
            src={`${assetBase}/Repuesta_72hrs_-_reloj.webp`}
            alt=""
            width={1448}
            height={1086}
            loading="lazy"
          />
          <Image
            className={styles.check}
            src={`${assetBase}/Repuesta_72hrs_-palomita.webp`}
            alt=""
            width={1254}
            height={1254}
            loading="lazy"
          />
          <Image
            className={`${styles.step} ${styles.stepOne}`}
            src={`${assetBase}/Repuesta_72hrs_-_solicitud.webp`}
            alt=""
            width={1086}
            height={1448}
            loading="lazy"
          />
          <Image
            className={`${styles.step} ${styles.stepTwo}`}
            src={`${assetBase}/Repuesta_72hrs_-_lupa.webp`}
            alt=""
            width={1086}
            height={1448}
            loading="lazy"
          />
          <Image
            className={`${styles.step} ${styles.stepThree}`}
            src={`${assetBase}/Repuesta_72hrs_-check_3.webp`}
            alt=""
            width={1086}
            height={1448}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
