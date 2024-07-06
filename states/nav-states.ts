import { create } from "zustand";

interface useNavStoreProps {
  isShow: boolean;
  toggle: (b: boolean) => void;
}

export const useNavStore = create<useNavStoreProps>((set) => ({
  isShow: true,
  toggle: (b) => set({ isShow: b }),
}));

interface useAdStateProp {
  adCode: {
    label: string;
    id: string;
    size: googletag.GeneralSize;
  }[];
  setAdCode: (
    code: {
      label: string;
      id: string;
      size: googletag.GeneralSize;
    }[]
  ) => void;
}

export const useAdState = create<useAdStateProp>((set) => ({
  adCode: [
    {
      label: "/22725519965/N1",
      id: "div-gpt-ad-1720004780049-0",
      size: [336, 280],
    },
    {
      label: "/22725519965/N2",
      id: "div-gpt-ad-1720007795507-0",
      size: [336, 280],
    },
    {
      label: "/22725519965/N3",
      id: "div-gpt-ad-1720007839543-0",
      size: [336, 280],
    },
    {
      label: "/22725519965/N4",
      id: "div-gpt-ad-1720008017405-0",
      size: [336, 280],
    },
    {
      label: "/22725519965/107",
      id: "div-gpt-ad-1712814513494-0",
      size: [336, 280],
    },
    {
      label: "/22725519965/106",
      id: "div-gpt-ad-1712814479863-0",
      size: [336, 280],
    },
    {
      label: "/22725519965/A2",
      id: "div-gpt-ad-1720008268652-0",
      size: [300, 600],
    },
    {
      label: "/22725519965/OJS_300X600",
      id: "div-gpt-ad-1712812433707-0",
      size: [300, 75],
    },
    {
      label: "/22725519965/A1",
      id: "div-gpt-ad-1720163175891-0",
      size: [320, 50],
    },
    {
      label: "/22725519965/F1",
      id: "div-gpt-ad-1720163279509-0",
      size: [320, 480],
    },
  ],
  setAdCode: (code) => set({ adCode: code }),
}));
