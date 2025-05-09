"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import iconPause from "@/assets/icons/icon-pause.svg";
import iconPlay from "@/assets/icons/icon-play.svg";
import iconSound from "@/assets/icons/unmute.svg";
import iconMute from "@/assets/icons/mute.svg";
import iconMaximaze from "@/assets/icons/maximize.svg";
import { Maximaze } from "@/components/common/Maximaze";
import clsx from "clsx";
const HeaderVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [maximaze, setMaximaze] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (videoRef.current) videoRef.current.volume = 0.5;
    }, 500);
  }, []);

  const toogleMute = () => {
    setIsMuted(!isMuted);
  };
  const handleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Maximaze maximaze={maximaze} setMaximaze={setMaximaze}>
      <div
        className={clsx(
          maximaze ? "lg:mt-0 rotate-90 md:rotate-0 w-full h-full" : "lg:mt-28",
          "md:h-full group relative overflow-hidden max-w-[1920px]"
        )}
        id="landing-page"
      >
        <video
          className={clsx(
            maximaze ? "w-full object-contain" : "",
            "w-auto md:w-full h-full md:object-cover md:object-center"
          )}
          ref={videoRef}
          src={"/animations/BANNER_WEB_V2.mp4"}
          loop
          autoPlay={isPlaying}
          playsInline
          muted={isMuted}
          preload="auto"
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        />
        <div
          className={clsx(
            maximaze ? "bottom-[30%] md:bottom-0" : "",
            "md:mb-0 flex items-center justify-between absolute bottom-0 left-0 w-full h-[70px] bg-gradient-to-t from-[#434f5b78] to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity"
          )}
        >
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center ml-6 gap-5 justify-between ">
              {isPlaying ? (
                <Image
                  onClick={handleVideoPlayback}
                  src={iconPause}
                  alt="Pause Icon"
                  width={24}
                  height={24}
                  className="cursor-pointer w-[16px] md:w-[24px]"
                />
              ) : (
                <Image
                  src={iconPlay}
                  alt="Play Icon"
                  width={24}
                  height={24}
                  onClick={handleVideoPlayback}
                  className="cursor-pointer w-[16px] md:w-[24px]"
                />
              )}
              {!isMuted ? (
                <Image
                  src={iconSound}
                  className="cursor-pointer w-[16px] md:w-[24px]"
                  alt="mute"
                  width={24}
                  height={24}
                  onClick={toogleMute}
                />
              ) : (
                <Image
                  src={iconMute}
                  className="cursor-pointer w-[16] md:w-[24px]"
                  alt="mute"
                  width={24}
                  height={24}
                  onClick={toogleMute}
                />
              )}
            </div>
            <div className="flex items-center mr-8 md:mr-6">
              {!maximaze ? (
                <Image
                  src={iconMaximaze}
                  alt="maximaze"
                  width={24}
                  height={24}
                  className="cursor-pointer w-[16px] md:w-[24px]"
                  onClick={() => setMaximaze(true)}
                />
              ) : (
                <Image
                  src={iconMaximaze}
                  alt="minimaze"
                  width={24}
                  height={24}
                  className="cursor-pointer w-[16px] md:w-[24px]"
                  onClick={() => setMaximaze(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Maximaze>
  );
};

export default HeaderVideo;
