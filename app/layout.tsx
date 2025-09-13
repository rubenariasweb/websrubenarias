import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Mi Portafolio",
  description: "Web profesional de presentación",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-background text-text">
        {children}
      </body>
    </html>
  );
}
