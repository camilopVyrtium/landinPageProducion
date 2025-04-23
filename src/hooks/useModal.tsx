"use client";

import React, { useState } from "react";
import { Modal } from "@/components/common/Modal";
import { Form } from "@/components/home/Form/Form";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const ModalComponent = () => {
    if (!isOpen) return null;
    
    return (
      <Modal handleClose={closeModal} type="md" variant="blue">
        <div className="max-h-[100vh]">
          <Form />
        </div>
      </Modal>
    );
  };

  return {
    openModal,
    closeModal,
    ModalComponent
  };
}; 