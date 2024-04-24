import type { Metadata } from "next";
import { Inter, Koulen, Roboto } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider  from "./context/active-section-context";
import NavBar from "./features/Header";
import Contact from "./features/Footer";

const inter = Inter({ subsets: ["latin"] });


const roboto = Roboto({ 
    weight: ["400", "500", "700"],
    subsets: ["latin"],
  });

export const metadata: Metadata = {
  title: "Portfolio Developper Fullstack",
  description: "Portfolio de Pierre Antoniutti, Developpeur Fullstack, ReacJs, NodeJs, MongoDB, TailwindCSS.",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: '/favicon-32x32.png',
    apple: '/favicon-32x32.png',
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="fr">
      <body className={`${roboto.className} bg-background max-w-[1440px]`}>
        <ActiveSectionContextProvider>
          <NavBar/>
          {children}
          <Contact />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
