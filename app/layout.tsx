import type { Metadata, Viewport } from "next";
import { publicPath } from "@/lib/public-path";
import "./globals.css";

const appIcon = publicPath("/images/avance/logo-de-avance.webp");
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://avancesoluciones.com.mx";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const webPath = `${basePath}/web`;
const siteName = "AVS Avance Soluciones";
const title =
  "Estudios socioeconómicos y sociolaborales en México | AVS Avance Soluciones";
const description =
  "Estudios socioeconómicos, sociolaborales, buró de crédito, demandas judiciales y verificación comercial con cobertura nacional y respuesta en 72 horas hábiles.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  keywords: [
    "estudios socioeconómicos",
    "estudios sociolaborales",
    "verificación laboral",
    "buró de crédito",
    "investigación de demandas judiciales",
    "verificación comercial",
    "estudios socioeconómicos México",
  ],
  alternates: {
    canonical: webPath,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: webPath,
    siteName,
    title,
    description,
    images: [
      {
        url: publicPath("/images/avance/riesgos/reporte.webp"),
        width: 1122,
        height: 1402,
        alt: "Reporte de verificación de AVS Avance Soluciones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [publicPath("/images/avance/riesgos/reporte.webp")],
  },
  icons: {
    icon: appIcon,
    shortcut: appIcon,
    apple: appIcon,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
