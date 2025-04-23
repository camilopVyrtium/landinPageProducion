"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Button from "@/components/common/Button";

const HeaderVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      setIsPlaying(true);
    }
  }, []);

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
    <div className="md:mt-28 md:h-full h-[300px] group relative overflow-hidden max-w-[1920px]" id="landing-page">
      <video
        className="w-auto md:w-full h-full object-cover object-center"
        ref={videoRef}
        src="/animations/BANNER_WEB_V2.mp4"
        loop
        autoPlay
        playsInline
        preload="auto"
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
      />
      <div className="flex items-center justify-start pl-4 absolute bottom-0 left-0 w-full h-[70px] bg-gradient-to-t from-[--gray2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-4">
          <Button onClick={handleVideoPlayback}>
            {isPlaying ? (
              <Image
                src="/icons/icon-pause.svg"
                alt="Pause Icon"
                width={44}
                height={44}
              />
            ) : (
              <Image
                src="/icons/icon-play.svg"
                alt="Play Icon"
                width={24}
                height={24}
              />
            )}
          </Button>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.1" 
            defaultValue="1"
            onChange={(e) => {
              if (videoRef.current) {
                videoRef.current.volume = parseFloat(e.target.value);
              }
            }}
            className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderVideo;
