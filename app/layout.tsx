import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avance Soluciones",
  description:
    "Estudios socioeconomicos y sociolaborales con cobertura nacional.",
  icons: {
    icon: "/images/avance/logo-de-avance.webp",
    shortcut: "/images/avance/logo-de-avance.webp",
    apple: "/images/avance/logo-de-avance.webp",
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
