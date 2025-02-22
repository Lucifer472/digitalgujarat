"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const AdsWrapper = ({ id, slot }: { id: string; slot: string }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.googletag) {
      window.googletag = window.googletag || { cmd: [] };
      let slotId: googletag.Slot;
      googletag.cmd.push(() => {
        if (googletag) {
          // @ts-ignore
          slotId = googletag
            .defineSlot(slot, [336, 280], id)
            .addService(googletag.pubads());
          googletag.pubads().enableSingleRequest();
          googletag.enableServices();
          googletag.display(id);
        }
      });

      // Cleanup: Destroy the ad slot when the component unmounts or page changes
      return () => {
        googletag.cmd.push(() => {
          googletag.destroySlots([slotId]);
        });
      };
    }
  }, [id, slot, pathname]);

  return (
    <div className="w-full space-y-2">
      <span className="text-[10px] block text-center w-full">SPONSORED</span>
      <div id={id} style={{ minWidth: "336px", minHeight: "280px" }}></div>
    </div>
  );
};
