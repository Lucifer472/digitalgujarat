"use client";

import { AdsWrapper } from "@/components/wrappers/ad-wrapper";
import ClientWrapper from "@/components/wrappers/client-wrapper";
import Script from "next/script";

export const Ad1 = () => {
  return (
    <ClientWrapper>
      {/* <AdsWrapper
        id="div-gpt-ad-1719211298206-0"
        label="/22989534981/DG_15_336X280"
        size={[336, 280]}
      /> */}
      <>
        <Script id="ad-1" strategy="lazyOnload">
          {`
            google_ad_client = "ca-pub-5088387678948767";
google_ad_width = 336;
google_ad_height = 280;
`}
        </Script>
        <Script
          src="//pagead2.googlesyndication.com/pagead/show_ads.js"
          type="text/javascript"
          strategy="lazyOnload"
        ></Script>
      </>
    </ClientWrapper>
  );
};

export const Ad2 = () => {
  return (
    <ClientWrapper>
      <AdsWrapper
        id="div-gpt-ad-1719211422148-0"
        label="/22989534981/DG_16_336X280"
        size={[336, 280]}
      />
    </ClientWrapper>
  );
};

export const Ad3 = () => {
  return (
    <ClientWrapper>
      <AdsWrapper
        id="div-gpt-ad-1719211842640-0"
        label="/22989534981/DG_18_336X280"
        size={[336, 280]}
      />
    </ClientWrapper>
  );
};

export const Ad4 = () => {
  return (
    <ClientWrapper>
      <AdsWrapper
        id="div-gpt-ad-1719211478199-0"
        label="/22989534981/DG_17_336X280"
        size={[336, 280]}
      />
    </ClientWrapper>
  );
};

export const Ad5 = () => {
  return (
    <ClientWrapper>
      <AdsWrapper
        id="div-gpt-ad-1712917344244-0"
        label="/22989534981/DG_5_336X280"
        size={[336, 280]}
      />
    </ClientWrapper>
  );
};

export const Ad6 = () => {
  return (
    <ClientWrapper>
      <AdsWrapper
        id="div-gpt-ad-1712917388201-0"
        label="/22989534981/DG_6_336X280"
        size={[336, 280]}
      />
    </ClientWrapper>
  );
};

export const Ad7 = () => {
  return (
    <ClientWrapper>
      <AdsWrapper
        id="div-gpt-ad-1712917433665-0"
        label="/22989534981/DG_7_336X280"
        size={[336, 280]}
      />
    </ClientWrapper>
  );
};

export const LargeAd = () => {
  return (
    <ClientWrapper>
      <AdsWrapper
        id="div-gpt-ad-1712812433707-0"
        label="/22989534981/DG_22_300X600"
        size={[300, 600]}
        divSize={{ x: 300, y: 600 }}
      />
    </ClientWrapper>
  );
};

export const SmallAd = () => {
  return (
    <ClientWrapper>
      <AdsWrapper
        id="div-gpt-ad-1720268508389-0"
        label="/22989534981/DG_21_300X75"
        size={[300, 100]}
        divSize={{ x: 300, y: 100 }}
      />
    </ClientWrapper>
  );
};
