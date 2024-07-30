import { useState } from "react";

const useModal = () => {
  const [isModal, setIsModal] = useState(true);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return {
    isModal,
    openModal,
    closeModal
  };
};

export default useModal;
