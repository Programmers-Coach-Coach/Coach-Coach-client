import { useState } from "react";

const useModal = () => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const handleModal = () => {
    if (isModal) {
      closeModal();
    } else {
      openModal();
    }
  };

  return {
    isModal,
    openModal,
    closeModal,
    handleModal
  };
};

export default useModal;
