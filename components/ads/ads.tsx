"use client";
import { AdsWrapper } from "@/components/wrappers/ad-wrapper";
import { usePathname } from "next/navigation";
import { Suspense, useEffect } from "react";

export const Ad1 = () => {
  return (
    <Suspense>
      <AdsWrapper
        id="MS_Digitalgujarat_300X250"
        slot="/22989534981/MS_Digitalgujarat_300X250"
      />
    </Suspense>
  );
};

export const Ad2 = () => {
  return (
    <Suspense>
      <AdsWrapper
        id="MS_Digitalgujarat_300X250_1"
        slot="/22989534981/MS_Digitalgujarat_300X250_1"
      />
    </Suspense>
  );
};

export const Ad3 = () => {
  return (
    <Suspense>
      <AdsWrapper
        id="MS_Digitalgujarat_300X250_2"
        slot="/22989534981/MS_Digitalgujarat_300X250_2"
      />
    </Suspense>
  );
};

export const Ad4 = () => {
  return (
    <Suspense>
      <AdsWrapper
        id="MS_Digitalgujarat_300X250_3"
        slot="/22989534981/MS_Digitalgujarat_300X250_3"
      />
    </Suspense>
  );
};

export const Ad5 = () => {
  return (
    <Suspense>
      <AdsWrapper
        id="MS_Digitalgujarat_300X250_4"
        slot="/22989534981/MS_Digitalgujarat_300X250_4"
      />
    </Suspense>
  );
};

export const BottomAnchorAd = () => {
  useEffect(() => {
    if (typeof window === "undefined" || !window.googletag) {
      return;
    }
    window.googletag = window.googletag || { cmd: [] };

    let anchorSlot: googletag.Slot | null | undefined;
    googletag.cmd.push(function () {
      // Define the bottom anchor ad slot
      anchorSlot = googletag.defineOutOfPageSlot(
        "/22989534981/MS_Digitalgujarat_BOTTOMANCHOR",
        googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR
      );

      if (anchorSlot) {
        anchorSlot.addService(googletag.pubads());
        googletag.display(anchorSlot); // This makes sure the ad is displayed.
      }

      googletag.pubads().enableSingleRequest();
      googletag.enableServices();
    });

    return () => {
      if (window.googletag && anchorSlot) {
        googletag.cmd.push(() => {
          googletag.destroySlots([anchorSlot as googletag.Slot]);
        });
      }
    };
  }, []);

  return null; // No visual component, as the ad will float outside the page
};

export const CustomPopupAd = () => {
  const pathname = usePathname();

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://adxtag.online/js/monetiscope_digitalgujarat_pop_up.js";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [pathname]);

  return null;
};
