import Script from "next/script";
import { Roboto_Slab } from "next/font/google";
import { Toaster } from "react-hot-toast";

import type { Metadata } from "next";

import LoadingWrapper from "@/components/wrappers/loading-wrapper";
import { CardImage, description, keywords, title, url } from "@/constant";

import "@/app/globals.css";
import Footer from "@/components/footer/Footer";

// Fonts
const poppins = Roboto_Slab({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Meta Data

export const metadata: Metadata = {
  title: `${title}`,
  description: description,
  keywords: keywords,
  robots: "index follow",
  twitter: {
    card: "summary_large_image",
    site: title,
    title: `${title}`,
    description: description,
    images: CardImage,
  },
  openGraph: {
    type: "website",
    siteName: `${title}`,
    description: description,
    url: url,
    countryName: "USA",
    images: CardImage,
  },
  metadataBase: new URL(url),
  alternates: {
    canonical: "/",
  },
  publisher: "Truepub Media",
  icons: "/favicon.ico",
};

// Main HTML
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} overflow-x-hidden`}>
        <Script
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
        ></Script>
        <Script strategy="afterInteractive" id="inter-ads" async>
          {`window.googletag = window.googletag || { cmd: [] };
          let interstitialSlot;
          googletag.cmd.push(() => {
            // Define a web interstitial ad slot.
            interstitialSlot = (interstitialSlot = googletag.defineOutOfPageSlot(
              "/22989534981/SN_INTERSTITIAL",
              googletag.enums.OutOfPageFormat.INTERSTITIAL
            ));

            // Slot returns null if the page or device does not support interstitials.
            if (interstitialSlot) {
              // Enable optional interstitial triggers and register the slot.
              interstitialSlot.addService(googletag.pubads()).setConfig({
                interstitial: {
                  triggers: {
                    navBar: true,
                    unhideWindow: true,
                  },
                },
              });

              googletag.enableServices();
            }
          });
          `}
        </Script>
        <Script strategy="afterInteractive" id="inter-ads-push" async>
          {`
            googletag.cmd.push(() => {
              googletag.display(interstitialSlot);
            });
          `}
        </Script>
        <Toaster position="top-center" />
        <LoadingWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
