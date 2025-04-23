import { CardCategory } from "@/interfaces/common/Card"
import Image from "next/image"
type Props = CardCategory;
export const CategoryCard = ({ icon, category }: Props) => {
  return (
    <div className="flex gap-1 text-white bg-[#BEBEC066] backdrop-blur-2xl rounded mx-1 px-2 py-1 font-bold relative mr-2 h-8 items-center">
      {icon && <Image src={icon} alt={category} width={12} height={13} />}
      <span>{category}</span>
    </div>
  );
};
