"use client";

import { KeyboardEvent, ReactNode, useMemo, useState } from "react";
import Image from "next/image";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./investigacion-y-verificacion.module.css";

type SlideId = "buro" | "demandas" | "comercial";

const slides: Array<{
  id: SlideId;
  kicker: string;
  title: ReactNode;
  description: string;
  icon: string;
  chips: string[];
}> = [
  {
    id: "buro",
    kicker: "Validacion financiera",
    title: (
      <>
        Investigacion de <span>Buro de Credito</span>
      </>
    ),
    description:
      "Informacion util y documentada para complementar su proceso de evaluacion.",
    icon: "/images/avance/iconos/Icono_escudo.webp",
    chips: ["Confidencial", "Reporte claro", "Decision informada"],
  },
  {
    id: "demandas",
    kicker: "Servicio especializado",
    title: (
      <>
        Investigacion de <strong>demandas judiciales</strong>
      </>
    ),
    description:
      "Civil, mercantil, familiar, hipotecario y laboral. Informacion documentada para tomar decisiones con mayor seguridad.",
    icon: "/images/avance/iconos/Icono_documento_investigado.webp",
    chips: ["Informacion verificable", "Analisis claro", "Apoyo para RH"],
  },
  {
    id: "comercial",
    kicker: "Apoyo empresarial",
    title: (
      <>
        Verificacion <span>comercial</span>
      </>
    ),
    description:
      "Valide informacion clave de negocios y operaciones con un enfoque claro, profesional y confiable.",
    icon: "/images/avance/iconos/icono_oficina.webp",
    chips: ["Informacion comprobable", "Proceso agil", "Mayor confianza"],
  },
];

const proofItems = [
  {
    text: "Manejamos su informacion con los mas altos estandares de seguridad y confidencialidad.",
    icon: "/images/avance/iconos/Icono_escudo_defensor.webp",
  },
  {
    text: "Reportes claros, estructurados y faciles de interpretar.",
    icon: "/images/avance/iconos/Icono_documento_listo.webp",
  },
  {
    text: "Apoyo profesional para tomar decisiones con mayor certeza.",
    icon: "/images/avance/iconos/Icono_personas.webp",
  },
  {
    text: "Entregas rapidas en 72 horas habiles.",
    icon: "/images/avance/iconos/Icono_tiempo.webp",
  },
];

const initialSlide = 1;

export function InvestigacionYVerificacion() {
  const [activeIndex, setActiveIndex] = useState(initialSlide);

  const translate = useMemo(() => {
    return `calc(-${activeIndex} * (var(--slide-width) + var(--slide-gap)))`;
  }, [activeIndex]);

  const goTo = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "ArrowLeft") goTo(activeIndex - 1);
    if (event.key === "ArrowRight") goTo(activeIndex + 1);
  };

  return (
    <section
      className={styles.section}
      id="investigacion-y-verificacion"
      aria-labelledby="investigacion-y-verificacion-title"
      onKeyDown={onKeyDown}
      tabIndex={0}
    >
      <div className={styles.header}>
        <span className={styles.servicePill}>Servicio especializado</span>
      </div>

      <div className={styles.carouselShell}>
        <button
          className={`${styles.navButton} ${styles.prev}`}
          type="button"
          aria-label="Servicio anterior"
          onClick={() => goTo(activeIndex - 1)}
        >
          <ChevronLeft size={34} strokeWidth={2.4} aria-hidden="true" />
        </button>

        <div className={styles.viewport}>
          <div className={styles.track} style={{ transform: `translateX(${translate})` }}>
            {slides.map((slide, index) => (
              <article
                className={`${styles.slide} ${
                  index === activeIndex ? styles.slideActive : ""
                }`}
                key={slide.id}
                aria-hidden={index !== activeIndex}
              >
                <div className={styles.slideInner}>
                  <div className={styles.copy}>
                    <div className={styles.kickerRow}>
                      <span className={styles.roundIcon} aria-hidden="true">
                        <Image
                          src={slide.icon}
                          alt=""
                          width={1254}
                          height={1254}
                          loading="lazy"
                        />
                      </span>
                      <span className={styles.kicker}>{slide.kicker}</span>
                    </div>
                    <h2
                      className={styles.title}
                      id={
                        slide.id === "demandas"
                          ? "investigacion-y-verificacion-title"
                          : undefined
                      }
                    >
                      {slide.title}
                    </h2>
                    <p className={styles.description}>{slide.description}</p>
                    <span className={styles.orangeRule} aria-hidden="true" />
                  </div>
                  <SlideVisual id={slide.id} />
                  <div className={styles.chips}>
                    {slide.chips.map((chip) => (
                      <span className={styles.chip} key={chip}>
                        <span className={styles.chipIcon} aria-hidden="true">
                          <Image
                            src="/images/avance/iconos/Icono_escudo.webp"
                            alt=""
                            width={1254}
                            height={1254}
                            loading="lazy"
                          />
                        </span>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          className={`${styles.navButton} ${styles.next}`}
          type="button"
          aria-label="Siguiente servicio"
          onClick={() => goTo(activeIndex + 1)}
        >
          <ChevronRight size={34} strokeWidth={2.4} aria-hidden="true" />
        </button>

        <div className={styles.dots} aria-label="Seleccionar servicio">
          {slides.map((slide, index) => (
            <button
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
              type="button"
              key={slide.id}
              aria-label={`Mostrar ${slide.kicker}`}
              aria-current={index === activeIndex}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>

      <div className={styles.proofBar}>
        {proofItems.map((item) => (
          <article className={styles.proofItem} key={item.text}>
            <span className={styles.proofIcon} aria-hidden="true">
              <Image
                src={item.icon}
                alt=""
                width={1254}
                height={1254}
                loading="lazy"
              />
            </span>
            <span>{item.text}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function SlideVisual({ id }: { id: SlideId }) {
  if (id === "demandas") {
    return (
      <div className={styles.visual} aria-hidden="true">
        <Image
          className={`${styles.mainAsset} ${styles.demandFolder}`}
          src="/images/avance/InvDemandas/Inv_Demandas_-_folder.webp"
          alt=""
          width={1122}
          height={1402}
          loading="lazy"
        />
        <Image
          className={`${styles.sideAsset} ${styles.demandTable}`}
          src="/images/avance/InvDemandas/Inv_Demandas_-_tabla.webp"
          alt=""
          width={1122}
          height={1402}
          loading="lazy"
        />
      </div>
    );
  }

  if (id === "buro") {
    return (
      <div className={styles.visual} aria-hidden="true">
        <Image
          className={`${styles.mainAsset} ${styles.buroFolder}`}
          src="/images/avance/BuroDeCredito/Buro_de_credito_-_Folder.webp"
          alt=""
          width={1122}
          height={1402}
          loading="lazy"
        />
        <Image
          className={`${styles.sideAsset} ${styles.buroSummary}`}
          src="/images/avance/BuroDeCredito/Buro_de_credito_-_resumen_credito.webp"
          alt=""
          width={1254}
          height={1254}
          loading="lazy"
        />
        <Image
          className={`${styles.sideAsset} ${styles.buroRisk}`}
          src="/images/avance/BuroDeCredito/Buro_de_credito_-_rango.webp"
          alt=""
          width={1254}
          height={1254}
          loading="lazy"
        />
        <Image
          className={`${styles.sideAsset} ${styles.buroSigns}`}
          src="/images/avance/BuroDeCredito/Buro_de_credito_-_relevant_signs.webp"
          alt=""
          width={1254}
          height={1254}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className={styles.visual} aria-hidden="true">
      <div className={styles.commercialPanel}>
        <div className={styles.commercialCard}>
          <span className={styles.checkCircle}>✓</span>
          <strong>Verificacion comercial</strong>
          <span className={styles.line} />
          <span className={styles.shortLine} />
        </div>
        <div className={styles.commercialAddress}>
          <strong>Domicilio fiscal</strong>
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.shortLine} />
        </div>
      </div>
    </div>
  );
}
