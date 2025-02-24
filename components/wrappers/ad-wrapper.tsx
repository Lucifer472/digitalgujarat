"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const AdsWrapper = ({ id, slot }: { id: string; slot: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const slotIdRef = useRef<googletag.Slot | null>(null);

  useEffect(() => {
    const ads = () => {
      if (typeof window === "undefined" || !window.googletag) {
        return;
      }

      try {
        googletag.cmd.push(() => {
          const slotId = googletag.defineSlot(
            slot,
            [[300, 250], [250, 250], [336, 280], [1, 1], "fluid"],
            id
          );

          if (slotId) {
            slotId.addService(googletag.pubads());
            slotIdRef.current = slotId; // Store the slot reference
          }

          googletag.pubads().set("page_url", "digitalgujarat.net");
          googletag.enableServices();
          googletag.display(id); // Use the passed id prop
        });
      } catch (error) {
        console.log(error);
      }
    };

    const timeout = setTimeout(() => {
      ads();
    }, 500);

    return () => {
      if (window.googletag && slotIdRef.current) {
        googletag.cmd.push(() => {
          googletag.destroySlots([slotIdRef.current as googletag.Slot]);
          slotIdRef.current = null;
        });
      }

      clearTimeout(timeout);
    };
  }, [id, slot, pathname, searchParams]);

  return (
    <div
      className="w-full space-y-2"
      style={{
        minWidth: "360px",
        minHeight: "300px",
      }}
    >
      <span className="text-[10px] block text-center w-full">SPONSORED</span>
      <div id={id} className="w-full h-full"></div>
    </div>
  );
};
