import "./globals.css";
import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Exitos con Web",
  description: "Crece con Webs profesionales",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-background text-text">
        {children}
          <SpeedInsights />
      </body>
    </html>
  );
}
