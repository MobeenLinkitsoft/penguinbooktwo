import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
// import Navbar from "@/components/global/Navbar";
import Footer from "../components/global/Footer";
import FloatingSidebar from "../components/global/FloatingSidebar";
import "./globals.css";
import CrispChat from "../components/global/CrispChat";
import { ModalProvider } from "../context/ModalContext";
import localFont from "next/font/local";
import Script from "next/script"; // 1. Import the Script component
import Navbar from "../components/global/Navbar";

const gilroy = localFont({
  src: [
    { path: "./fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-gilroy",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Penguin Book Publishers | Premium Book Services",
  description: "End-to-end professional book writing, editing, and publishing solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* 2. Google Tag Manager - Head Script  */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PN8498QT');`,
          }}
        />
      </head>
      <body className={`${gilroy.className} bg-slate-50 antialiased flex flex-col min-h-screen text-slate-800 relative`}>
        
        {/* 3. Google Tag Manager (noscript) - Immediately after opening body tag */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PN8498QT"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <ModalProvider>
          <CrispChat />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingSidebar />
        </ModalProvider>
      </body>
    </html>
  );
}