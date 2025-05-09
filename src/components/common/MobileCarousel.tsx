import React from 'react';
import clsx from 'clsx';
import { Slider } from '@/components/common/Slider/Slider';
import face1 from '@/assets/images/home/face1.png';
import face2 from '@/assets/images/home/face2.png';
import face3 from '@/assets/images/home/face3.png';
import face4 from '@/assets/images/home/face4.png';
import Image from 'next/image';
const items = [
    {
      id: "1",
      backgroundImage: face1,
    },
    {
      id: "2",
      backgroundImage: face2,
    },
    {
      id: "3",
      backgroundImage: face3,
    },
    {
      id: "4",
      backgroundImage: face4,
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
                        <Image
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