

import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Contact from "../components/footer/Footer";
import Providers from "./../context/Providers";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";

const inter = Inter({ subsets: ["latin"] });


const roboto = Roboto({ 
    weight: ["400", "500", "700"],
    subsets: ["latin"],
  });

export const metadata: Metadata = {
  title: "Portfolio Developper Fullstack",
  description: "Portfolio de Pierre Antoniutti, Developpeur Fullstack, ReacJs, NodeJs, MongoDB, TailwindCSS.",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="fr">
      <body className={`${roboto.className} bg-background w-full flex flex-col items-center `}>
        <Providers>
            {children}
          <Contact />
        </Providers>
      </body>
    </html>
  );
}


