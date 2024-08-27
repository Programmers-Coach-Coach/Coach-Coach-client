import { useEffect, useRef } from "react";

const useDropdownClick = (handler: () => void, disabled: boolean) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target as Node)) {
        if (!disabled) {
          handler();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler, disabled]);

  return { menuRef };
};

export default useDropdownClick;
