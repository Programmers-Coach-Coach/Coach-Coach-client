import RatingStars from "@/components/common/Card/ReviewCard.tsx/RatingStars";
import { useEditReview, usePostReview } from "@/hooks/queries/useReview";
import { IPostReview } from "@/models/review.model";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

interface Props {
  coachId: number;
  coachName: string;
  type: TReviewMethod;
}

export type TReviewMethod = "enroll" | "edit";

const AddReviewInner = ({ coachId, coachName, type }: Props) => {
  const { mutate: postMutate } = usePostReview(coachId);
  const { mutate: editMutate } = useEditReview(coachId);
  const { control, handleSubmit } = useForm<IPostReview>();

  const onSubmit = (data: IPostReview) => {
    if (type === "enroll") {
      postMutate({ coachId, data });
      // onClose();
    } else {
      console.log("수정");
      editMutate({ reviewId: coachId, data });
      // onClose();
    }
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <StarSection>
        <p className="title__input">{coachName}님을 추천하시겠어요?</p>
        <div className="stars__input">
          <Controller
            control={control}
            name="stars"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <RatingStars stars={value} onClick={(stars) => onChange(stars)} />
            )}
          />
        </div>
      </StarSection>
      <TextSection>
        <p className="title__input">자세한 후기를 남겨주세요</p>
        <TextInput>
          {/* <NameWrapper>
            <span className="name">{nameMasking("하주영")}</span>
            <CoachRating>
              <SvgIcon name="star" fill="review" width="16px" height="16px" />
              {Number(1).toFixed(1)}
            </CoachRating>
          </NameWrapper>
          <CreatedAt className="created-at">{"hihihi"}</CreatedAt> */}
          <ReviewText
            placeholder="코치에 대한 리뷰를 적어주세요"
            {...control.register("contents", {
              required: true,
              maxLength: 500
            })}
          />
        </TextInput>
      </TextSection>
      <Button type="submit">등록하기</Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  font-size: 15px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.375px;
`;

const StarSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  margin-top: 15px;

  .stars__input {
    display: flex;
    gap: 2px;
  }
`;

const TextSection = styled.div``;

const TextInput = styled.div`
  background-color: #111111;
  border-radius: 24px;
  padding: 20px;

  position: relative;

  .created-at {
    position: absolute;
    top: 20px;
    right: 30px;
  }
`;

// const NameWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 2px;
//   margin: 7px;

//   .name {
//     font-size: 13px;
//     font-weight: 800;
//     line-height: 20px;
//     letter-spacing: -0.325px;
//   }
// `;

// const CoachRating = styled.div`
//   display: flex;
//   gap: 2px;
//   font-size: 10px;
//   font-weight: 400;
//   line-height: 16px;
//   letter-spacing: -0.5px;
// `;

// const CreatedAt = styled.div`
//   font-size: 7px;
//   font-weight: 400;
//   line-height: 15px;
//   letter-spacing: -0.35px;
// `;

const ReviewText = styled.textarea`
  font-size: 10px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.5px;
  padding: 0 10px;
  background: none;
  width: 100%;
  color: #fff;
  border: none;
  outline: none;
  resize: none;
  height: 200px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  width: 100%;
  height: 60px;
  font-size: 15px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.375px;
  color: ${({ theme }) => theme.buttonVariant.contained.color};
  background-color: ${({ theme }) =>
    theme.buttonVariant.contained.backgroundColor};
  border: ${({ theme }) => theme.buttonVariant.contained.border};
  border-radius: 20px;
  margin-bottom: 16px;
`;

export default AddReviewInner;
