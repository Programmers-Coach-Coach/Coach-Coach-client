import { useRef, useState } from "react";

const useModal = () => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const overlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModal(false);
    }
  };

  return {
    modalRef,
    isModal,
    openModal,
    closeModal,
    overlayClick
  };
};

export default useModal;
