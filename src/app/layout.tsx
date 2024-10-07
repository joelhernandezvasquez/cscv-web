import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Comunidad Siervos de Cristo Vivo Brooklyn NY - Catolica",
  description: "La Comunidad Siervos de Cristo Vivo es una asociación privada de fieles, cuyos miembros son católicos y estando en el mundo viven comprometidos con su fe en el Señor Jesús. Fue fundada el 28 de noviembre de 1982 en la República Dominicana, donde hoy tiene su sede principal.",
  keywords:"Comunidad Siervos de Cristo Vivo catolica Brooklyn Emiliano Tardif"
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
