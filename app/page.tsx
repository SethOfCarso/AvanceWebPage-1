import { Header, Hero } from "@/components/hero";

const services = [
  "Estudios socioeconomicos",
  "Verificacion domiciliaria",
  "Historial laboral",
  "Referencias personales",
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="quick-section" id="soluciones" aria-label="Soluciones">
          <div>
            <p className="section-kicker">Soluciones</p>
            <h2>Informacion clara para contratar con confianza.</h2>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article key={service}>
                <span />
                <p>{service}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
