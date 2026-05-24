import { Header, Hero } from "@/components/hero";
import { LazyPageSections } from "@/components/lazy-page-sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LazyPageSections />
      </main>
    </>
  );
}
