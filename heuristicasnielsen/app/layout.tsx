import type { Metadata } from "next";
import "./globals.css"; 

export const metadata: Metadata = {
  title: "UX Dossiê Educativo - Heurísticas de Nielsen",
  description: "Análise de sites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
