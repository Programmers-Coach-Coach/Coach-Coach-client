import { useState, useEffect } from "react";

function useResponsiveIconSize(
  smallSize: string,
  largeSize: string,
  threshold: number
) {
  const [iconSize, setIconSize] = useState(largeSize);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= threshold) {
        setIconSize(smallSize);
      } else {
        setIconSize(largeSize);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [smallSize, largeSize, threshold]);

  return iconSize;
}

export default useResponsiveIconSize;
