"use client";

import { useEffect, useRef } from "react";

export const AudioDelayed = ({ randomNumber }: { randomNumber: number }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (audioRef && audioRef.current) {
        // Play the audio
        audioRef.current.play();
      }
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [randomNumber]);

  return (
    <audio
      ref={audioRef}
      controls
      className="w-full max-w-2xl rounded-full"
      controlsList="nofullscreen nodownload"
    >
      <source src={`/audio/${randomNumber}.mp3`} />
    </audio>
  );
};
