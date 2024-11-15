import Empty from "@/components/common/Empty/Empty";
import { IExerciseRoutine } from "@/models/record.model";
import { LineClamp, WhiteSpace } from "@/style/global";
import styled from "styled-components";

interface Props {
  routines: IExerciseRoutine[];
}
const ExerciseDetail = ({ routines }: Props) => {
  return (
    <Wrapper>
      {routines.length > 0 ? (
        routines.map((routine, i) => (
          <Routine key={i}>
            <CoachInfo>
              {/* <img
                src={routine.coachProfileImageUrl || undefined}
                alt={routine.coachName || "내 프로필"}
              /> */}
              <LineClamp $line={1} className="b3">
                {routine.routineName ?? "삭제된 루틴입니다"}
              </LineClamp>
              <p className="small-text">{routine.coachName || "나"}</p>
            </CoachInfo>
            {/* {routine.completedCategories.map((category) => (
              <CategoryDropdown
                category={{
                  categoryId: category.categoryId,
                  categoryName: category.categoryName
                }}
                actions={category.actions}
                checkDisabled
              />
            ))} */}
          </Routine>
        ))
      ) : (
        <>
          <Empty
            name="dumbbell"
            size="64px"
            color="gray3"
            descriptions="오늘은 쉬어가는 시간을 가졌네요!"
          />
          <WhiteSpace $height={100} />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Routine = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 0 0 14px 0;
`;

const CoachInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 50px;
  padding: 0 20px;
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.background};

  img {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }

  .small-text {
    font-size: 12px;
  }
`;
export default ExerciseDetail;
