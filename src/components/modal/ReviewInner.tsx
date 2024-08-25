import { usePostReview } from "@/hooks/queries/useReview";
import { IPostReview } from "@/models/review.model";
import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import RatingStars from "../common/Card/ReviewCard.tsx/RatingStars";

interface Props {
  coachId: number;
  onClose: () => void;
}

const ReviewInner = ({ coachId, onClose }: Props) => {
  const { mutate } = usePostReview(coachId);
  const { control, handleSubmit } = useForm<IPostReview>();

  const onSubmit = (data: IPostReview) => {
    mutate({ coachId, data });
    onClose();
  };

  return (
    <ReviewStyle onSubmit={handleSubmit(onSubmit)}>
      <Stars>
        <Controller
          control={control}
          name="stars"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <RatingStars
              stars={value}
              size="30"
              onClick={(stars) => onChange(stars)}
            />
          )}
        />
      </Stars>
      <StyledTextField
        multiline
        rows={3}
        placeholder="코치에 대한 리뷰를 적어주세요"
        fullWidth
        {...control.register("contents", { required: true })}
      />
      <Footer>
        <button onClick={onClose} type="button">
          취소
        </button>
        <button type="submit">등록하기</button>
      </Footer>
    </ReviewStyle>
  );
};

const ReviewStyle = styled.form`
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
    font-size: 14px;
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.color.third};
    }
  }
`;

export default ReviewInner;
