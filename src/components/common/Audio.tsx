'use client'
import { DragEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { playAudio, pauseAudio } from "@/data/commonData";
import clsx from "clsx";

type Props = {
    src: string;
    initialDuration?: number;
}
export const Audio = ({ src, initialDuration = 0 }: Props) => {
    const audio = useRef<HTMLAudioElement>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(initialDuration);
    const [isPlaying, setIsPlaying] = useState(false);
    const percent = ((currentTime || 0) / (duration || 1)) * 100;
    useEffect(() => {
        console.log({ duration });
        if (Number.isNaN(audio.current?.duration))
            setDuration(initialDuration);
        else
            setDuration(audio.current?.duration ?? initialDuration);
    }, [audio, duration, initialDuration]);
    const formatMinutes = (time: number) => {
        const timeInMinutes = parseInt(time.toString()) / 60;
        const minutes = Math.floor(timeInMinutes);
        const seconds = Math.abs(minutes - timeInMinutes) * 60;
        return (minutes < 10 ? `0${minutes}` : minutes) + ":" + (seconds < 10 ? `0${seconds}` : seconds);
    }
    const handlePlayingSound = () => {
        setCurrentTime(audio.current!.currentTime);
    }
    const handleDrag = (e: DragEvent<HTMLDivElement>) => {
        console.log(e);
    }
    const tooglePlay = () => {
        if (audio) {
            if (audio.current?.paused) {
                audio.current.play();
                setIsPlaying(true);
            } else {
                audio.current?.pause();
                setIsPlaying(false);
            }
        }
    }
    return (
        <div className="flex bg-blue4 rounded-lg p-3 justify-between gap-4 h-[5.5rem] w-full relative">
            <Image
                src={isPlaying ? pauseAudio : playAudio}
                alt={isPlaying ? "pause" : "play"}
                width={50}
                height={50}
                className="cursor-pointer"
                onClick={tooglePlay}
            />
            <div className="flex w-full items-center">
                <div className="w-full h-4 bg-yellow4 rounded-lg p-0 outline-0 relative">
                    <div className={clsx("absolute rounded-lg bg-blue1 h-4", `w-[${percent}%]`)} style={{ width: `${percent}%` }}>
                        <div className="w-6 h-4 rounded-lg bg-blue1 absolute -right-[0.7rem] cursor-pointer" draggable onDrag={handleDrag}></div>
                    </div>
                </div>
                <audio className="hidden" ref={audio} onTimeUpdate={handlePlayingSound} onEnded={() => setCurrentTime(0)}>
                    <source src={src} type="audio/mpeg" />
                </audio>
            </div>
            <span className="text-blue1 text-base absolute right-2 bottom-1">{formatMinutes(currentTime || 0)}/{formatMinutes(duration || 1)}</span>
        </div>
    )
}