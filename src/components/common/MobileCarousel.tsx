import React from 'react';
import clsx from 'clsx';
import { Slider } from '@/components/common/Slider/Slider';

const items = [
    {
      id: "1",
      backgroundImage: "/images/home/face1.png",
    },
    {
      id: "2",
      backgroundImage: "/images/home/face2.png",
    },
    {
      id: "3",
      backgroundImage: "/images/home/face3.png",
    },
    {
      id: "4",
      backgroundImage: "/images/home/face4.png",
    },
  ];


interface IaCarouselProps {
    className?: string;
    height?: string;
}

export const IaCarousel: React.FC<IaCarouselProps> = ({ 
    className,
    height = "h-[500px]" 
}) => {
    return (
        <div className={clsx('w-full md:hidden', className)}>
            <Slider actualPointColor="#64d2d9">
                {items.map((item) => (
                    <div 
                        key={item.id} 
                        className={clsx("relative w-full", height)}
                    >
                        <img
                            src={item.backgroundImage}
                            alt="Slide image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}; 