"use client";

import Image from "next/image";
import { useState } from "react";
import { useModal } from "@/hooks/useModal";
import chat from '@/assets/images/common/chat.svg';
import chatHover from '@/assets/images/common/chat-hover.svg';

const ModalContact = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { openModal, ModalComponent } = useModal();

  return (
    <>
      <button
        onClick={openModal}
        className="fixed bottom-5 right-5 text-white p-3 z-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={isHovered ? chatHover : chat}
          alt="Chat icon"
          className="w-20 h-20"
          width={44}
          height={44}
        />
      </button>
      <ModalComponent />
    </>
  );
};

export default ModalContact;
