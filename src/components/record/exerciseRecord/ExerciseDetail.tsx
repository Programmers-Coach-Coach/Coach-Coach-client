import profileImage from "@/assets/images/basicProfile.png";
import CategoryDropdown from "@/components/common/InputField/dropdown/CategoryDropdown";
import styled from "styled-components";

// TODO: 내 기록 API 요청

const ACITONS = [
  {
    actionId: 0,
    actionName: "액션1",
    sets: 3,
    countOrMinutes: "15회"
  },
  {
    actionId: 1,
    actionName: "액션2",
    sets: 3,
    countOrMinutes: "15회"
  },
  {
    actionId: 2,
    actionName: "액션2",
    sets: 3,
    countOrMinutes: "15회"
  }
];

const CATEGORY = {
  categoryId: 1,
  categoryName: "카테고리명"
};

const ExerciseDetail = () => {
  return (
    <Wrapper>
      <ExerciseWrapper>
        <Routine>
          <CoachInfo>
            <img src={profileImage} alt="코치 이미지" />
            <p className="b3">루틴1</p>
            <p className="small-text">하주영</p>
          </CoachInfo>
          <CategoryDropdown category={CATEGORY} actions={ACITONS} />
          <CategoryDropdown category={CATEGORY} actions={ACITONS} />
          <CategoryDropdown category={CATEGORY} actions={ACITONS} />
        </Routine>
        <Routine>
          <CoachInfo>
            <img src={profileImage} alt="코치 이미지" />
            <p className="b3">루틴2</p>
            <p className="small-text">하주영</p>
          </CoachInfo>
          <CategoryDropdown category={CATEGORY} actions={ACITONS} />
          <CategoryDropdown category={CATEGORY} actions={ACITONS} />
          <CategoryDropdown category={CATEGORY} actions={ACITONS} />
        </Routine>
        <Routine>
          <CoachInfo>
            <CoachInfo>
              <img src={profileImage} alt="코치 이미지" />
            </CoachInfo>
            <p className="b3">루틴2</p>
            <p className="small-text">하주영</p>
          </CoachInfo>
          <CategoryDropdown category={CATEGORY} actions={ACITONS} />
          <CategoryDropdown category={CATEGORY} actions={ACITONS} />
          <CategoryDropdown category={CATEGORY} actions={ACITONS} />
        </Routine>
      </ExerciseWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ExerciseWrapper = styled.div`
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
  padding: 10px;
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
