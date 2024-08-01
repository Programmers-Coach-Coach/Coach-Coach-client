import { Checkbox } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

type Size = "small" | "medium" | "large";
const label = { inputProps: { "aria-label": "Checkbox" } };

interface Props {
  checked: boolean;
  size: Size;
}

const Heart = ({ checked, size }: Props) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleHeart = () => {
    setIsChecked(!isChecked);
  };

  return (
    <HeartStyle $size={size}>
      <CheckboxStyle
        {...label}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        onChange={handleHeart}
        className="custom-checkbox"
      />
    </HeartStyle>
  );
};

const HeartStyle = styled.div<{ $size: Size }>``;

// todo : 호버 색상 제거
const CheckboxStyle = styled(Checkbox)`
  & .MuiSvgIcon-root {
    color: ${({ theme }) => theme.color.yellow}; // 기본 색상
  }

  // Hover 상태 배경 색상 제거
  & .MuiCheckbox-root:hover {
    display: none;
  }

  // 리플 색상 제거
  & .MuiTouchRipple-root {
    color: ${({ theme }) => theme.color.yellow}; // 기본 색상
  }
`;

export default Heart;
