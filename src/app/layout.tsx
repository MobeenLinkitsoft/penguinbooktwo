import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";
import FloatingSidebar from "../components/global/FloatingSidebar";
import "./globals.css";
// import CrispChat from "../components/global/CrispChat"; // <-- CrispChat commented out
import { ModalProvider } from "../context/ModalContext";
import localFont from "next/font/local";
import Script from "next/script";

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
        {/* ================= Google Tag Manager (Head) ================= */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N5BMN3PG');`,
          }}
        />

        {/* ================= LiveChat (Head) ================= */}
        <Script
          id="livechat-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.__lc = window.__lc || {};
              window.__lc.license = 19833469;
              window.__lc.integration_name = "manual_onboarding";
              window.__lc.product_name = "livechat";
              ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
            `,
          }}
        />
      </head>
      <body className={`${gilroy.className} bg-slate-50 antialiased flex flex-col min-h-screen text-slate-800 relative`}>
        
        {/* ================= Google Tag Manager (NoScript) ================= */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-N5BMN3PG"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* ================= LiveChat (NoScript) ================= */}
        <noscript>
          <a href="https://www.livechat.com/chat-with/19833469/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a>
        </noscript>

        <ModalProvider>
          {/* <CrispChat /> */}
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <FloatingSidebar />
        </ModalProvider>
      </body>
    </html>
  );
}