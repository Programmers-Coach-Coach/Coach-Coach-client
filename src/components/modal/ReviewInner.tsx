import { TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import RatingStars from "../common/Card/ReviewCard.tsx/RatingStars";

interface Props {
  onClose: () => void;
  onEnroll: () => void;
}
const ReviewInner = ({ onEnroll, onClose }: Props) => {
  const [stars, setStars] = useState<number>(0);

  const handleStars = (cnt: number) => {
    setStars(cnt);
  };

  return (
    <ReviewStyle>
      <Stars>
        <RatingStars stars={stars} size="30" onClick={handleStars} />
      </Stars>
      <StyledTextField
        multiline
        rows={3}
        placeholder="코치에 대한 리뷰를 적어주세요"
        fullWidth
      />
      <Footer>
        <button onClick={onClose}>취소</button>
        <button onClick={onEnroll}>등록하기</button>
      </Footer>
    </ReviewStyle>
  );
};

const ReviewStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;

  button:first-of-type {
    color: inherit;
  }

  button:nth-of-type(2) {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.color.third};
    }
  }
`;

export default ReviewInner;
