// app/layout.tsx
import "./globals.css";
import { Roboto } from "next/font/google";
import Providers from "./store/Providers";

// Importa con los pesos y subsets que necesites
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata = {
  title: "Mi App",
  description: "App con Roboto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={roboto.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
