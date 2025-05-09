
import { IATop } from "./IATop";
import { IAAnimation } from "./IAAnimation";
import { IABottom } from "./IABottom";
import { IaCarousel } from "@/components/common/MobileCarousel";

export const IA = () => {
  return (
    <>
      <IATop />
       <IaCarousel height="h-[700px]" />  
      <IAAnimation />
      <IABottom />
    </>
  );
};
