import Image from "next/image";
import { useEffect } from "react";
import { menuOptions } from "@/data/layoutData";
import Button from "@/components/common/Button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function MobileSidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const t = useTranslations("layout.header");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay con desenfoque */}
      <div
        className={`fixed inset-0 z-40 backdrop-blur-sm bg-black/30 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <div
        className={
          isOpen
            ? "block fixed right-8 top-14 h-[calc(90vh-3rem)] w-[80%] bg-transparent z-50 backdrop-blur-md bg-white/20 shadow-2xl shadow-black/50"
            : "hidden"
        }
        onClick={onClose}
      >
        <div className="p-8 flex flex-col items-end justify-between h-full">
          <button onClick={onClose}>
            <Image
              src="/icons/arrow-right.svg"
              alt="logo"
              width={50}
              height={50}
            />
          </button>

          <div className="flex items-end justify-between w-full">
            <Image src="/icons/vyrtium.svg" alt="logo" width={50} height={50} />

            <ul className="flex flex-col items-end gap-4">
              {menuOptions.map((option) => (
                <li
                  key={option.title}
                  className={option.subOptions ? "relative" : ""}
                >
                  <Link
                    className="font-medium text-lg px-0 hover:text-yellow4"
                    href={option.endpoint}
                  >
                    {t(option.title)}
                  </Link>
                </li>
              ))}
              <li>
                <Button variant="primary" href="/">
                  {t("contact")}
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
