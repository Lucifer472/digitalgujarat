"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const AdsWrapper = ({ id, slot }: { id: string; slot: string }) => {
  const pathname = usePathname();
  const slotIdRef = useRef<googletag.Slot | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.googletag) {
      return;
    }
    window.googletag = window.googletag || { cmd: [] };

    // Define the ad slot if it's not already defined
    googletag.cmd.push(() => {
      // Check if slot already exists
      if (!slotIdRef.current) {
        const slotId = googletag.defineSlot(
          slot,
          [[300, 250], [250, 250], [336, 280], [1, 1], "fluid"],
          id
        );

        if (slotId) {
          slotId.addService(googletag.pubads());
          slotIdRef.current = slotId;
        }

        googletag.pubads().set("page_url", "digitalgujarat.net");
        googletag.enableServices();
        googletag.display(id);
      } else {
        // Refresh the ad slot when pathname changes
        googletag.pubads().refresh([slotIdRef.current]);
      }
    });
  }, [id, slot, pathname]);

  return (
    <div className="w-full space-y-2">
      <span className="text-[10px] block text-center w-full">SPONSORED</span>
      <div id={id}></div>
    </div>
  );
};
