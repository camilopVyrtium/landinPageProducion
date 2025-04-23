"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { play, mute, sound, pause } from "@/data/commonData";
import clsx from "clsx";

type Props = {
  src: string;
  className?: string;
  classNameVideo?: string;
  type?: string;
  controls?: boolean;
};

export const Video = ({
  src,
  className,
  classNameVideo,
  type = "video/mp4",
  controls = true,
}: Props) => {
  const [mounted, setMounted] = useState(false);
  const $video = useRef<HTMLVideoElement>(null);
  const [playbackState, setPlaybackState] = useState<boolean>(true);
  const [soundState, setSoundState] = useState<boolean>(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tooglePlayback = () => {
    if ($video.current && mounted) {
      const { paused } = $video.current;
      if (!paused) $video.current.pause();
      else $video.current.play();
      setPlaybackState(!paused);
    }
  };

  const toogleSound = () => {
    if ($video.current && mounted) {
      const { muted } = $video.current;
      $video.current.muted = !muted;
      setSoundState(muted);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      <video
        playsInline
        preload="auto"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        ref={$video}
        className={clsx("rounded-xl", classNameVideo)}
        {...(!controls ? { autoPlay: true, loop: true, muted: true } : {})}
        onEnded={() => {
          setPlaybackState(true);
        }}
      >
        <source src={src} type={type} />
      </video>
      <div
        className={clsx(
          !playbackState ? "opacity-0" : "opacity-100",
          "absolute top-0 bottom-0 left-0 right-0 transition-opacity duration-300",
          "hover:opacity-100"
        )}
      >
        {controls && (
          <Image
            src={playbackState ? play : pause}
            alt="playback"
            className={clsx(
              "absolute top-1/2 left-1/2 cursor-pointer",
              playbackState ? "w-16 h-16" : "w-24 h-24 left-[42%] top-[48%]"
            )}
            onClick={tooglePlayback}
            width={64}
            height={64}
          />
        )}
        {controls && (
          <Image
            src={soundState ? sound : mute}
            alt="sound"
            className="absolute bottom-1 right-2 cursor-pointer w-auto"
            onClick={toogleSound}
            width={30}
            height={30}
          />
        )}
      </div>
    </div>
  );
};
