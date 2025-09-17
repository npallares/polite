import "./globals.css";
import { Poppins } from "next/font/google";
import Providers from "../store/Providers";
import NotificationCenter from "@/components/NotificationCenter/NotificationCenter";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Polite",
  description: "Polite",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={poppins.className}>
      <body>
        <Providers>
          <NotificationCenter />
          {children}
        </Providers>
      </body>
    </html>
  );
}
