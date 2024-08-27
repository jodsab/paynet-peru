import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

const larsseit = localFont({
  src: "../resources/fonts/larsseit/Larsseit-Bold.woff2",
  display: "swap",
});

const urbanist = localFont({
  src: "../resources/fonts/urbanist/Urbanist-Regular.woff2",
  display: "swap",
});

export const metadata = {
  title: "PayNet - Perú",
  description:
    "Transacciones directas en la palma de tu mano, invierte en el crecimiento de tu negocio con nuestras comisiones más bajas del mercado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${larsseit.className} ${urbanist.className}`}>
        {children}
      </body>
    </html>
  );
}
