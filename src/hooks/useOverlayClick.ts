import { useRef } from "react";

const useOverlayClick = (handler: () => void, disabled: boolean) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const overlayClick = (e: React.MouseEvent) => {
    if (!modalRef.current?.contains(e.target as Node)) {
      if (!disabled) {
        handler();
      }
    }
  };

  return {
    modalRef,
    overlayClick
  };
};

export default useOverlayClick;
