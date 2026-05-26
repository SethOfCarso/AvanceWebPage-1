import { Header, Hero } from "@/components/hero";
import { LazyPageSections } from "@/components/lazy-page-sections";
import { SiteEffects } from "@/components/site-effects";

export default function Home() {
  return (
    <>
      <SiteEffects />
      <Header />
      <main>
        <Hero />
        <LazyPageSections />
      </main>
    </>
  );
}
