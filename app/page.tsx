import type { Metadata } from "next";
import { publicPath } from "@/lib/public-path";

export const metadata: Metadata = {
  alternates: {
    canonical: publicPath("/web"),
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function Home() {
  const webPath = publicPath("/web");

  return (
    <main className="redirect-page">
      {/* <meta httpEquiv="refresh" content={`0; url=${webPath}`} /> */}
      <p>
        Base a <a href={webPath}>/web</a>.
      </p>
    </main>
  );
}
