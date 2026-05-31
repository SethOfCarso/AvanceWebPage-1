import type { Metadata, Viewport } from "next";
import { publicPath } from "@/lib/public-path";
import "./globals.css";

const appIcon = publicPath("/images/avance/logo-de-avance.webp");

export const metadata: Metadata = {
  title: "Avance Soluciones",
  description:
    "Estudios socioeconomicos y sociolaborales con cobertura nacional.",
  icons: {
    icon: appIcon,
    shortcut: appIcon,
    apple: appIcon,
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
