import ClientWrapper from "@/components/wrappers/client-wrapper";
import LoadingWrapper from "@/components/wrappers/loading-wrapper";
import Script from "next/script";
import AnchorAd from "@/components/ads/anchor-ad";
import InterstitialAd from "@/components/ads/interstitial-ad";

const OtherLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LoadingWrapper />
      <Script
        strategy="beforeInteractive"
        async
        src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        id="google-ads"
      />
      <Script
        strategy="beforeInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-R9J2KRQV13"
        id="google-analytics"
      />
      <Script strategy="beforeInteractive" id="google-analytics-body">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-R9J2KRQV13');
        `}
      </Script>
      {children}
      <ClientWrapper>
        <>
          <AnchorAd />
          <InterstitialAd />
        </>
      </ClientWrapper>
    </>
  );
};

export default OtherLayout;
