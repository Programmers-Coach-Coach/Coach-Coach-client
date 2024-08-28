import { useFetchAuth } from "@/hooks/useFetchAuth";
import useModal from "@/hooks/useModal";
import { ICoachDetail } from "@/models/coach.model";
import styled from "styled-components";
import ReviewCard from "../common/Card/ReviewCard.tsx/ReviewCard";
import Modal from "../common/modal/Modal";
import ReviewInner from "../modal/ReviewInner";

interface Props {
  coach: ICoachDetail;
}
const DetailInfo = ({ coach }: Props) => {
  const { isModal, openModal, closeModal } = useModal();
  const { data: myAuth } = useFetchAuth();

  const showPost = () => {
    return (
      !coach.reviews.some((review) => review.isMyReview) && // 내가 리뷰 작성한 적이 없으면서
      coach.isMatched && //  매칭 상태일 때
      myAuth?.nickname === coach.coachName // 그리고 나의 상세페이지가 아닐 때
    );
  };

  return (
    <Wrapper>
      <SubWrapper>
        <h2>종목</h2>
        <CaochingSports>
          {coach.coachingSports.map((sport) => (
            <li key={sport.sportId}>#{sport.sportName}</li>
          ))}
        </CaochingSports>
      </SubWrapper>
      <SubWrapper>
        <h2>자기소개</h2>
        <DescriptionTextField>{coach.coachIntroduction}</DescriptionTextField>
      </SubWrapper>

      {coach.activeCenter && (
        <SubWrapper>
          <h2>활동중인 센터</h2>
          <TextField>
            {coach.activeCenter
              ? `${coach.activeCenter} ${coach.activeCenterDetail}`
              : "등록된 센터 정보가 없습니다"}
          </TextField>
        </SubWrapper>
      )}
      {/* <SubWrapper>
        <h2>주소</h2>
        <TextField>
          {coach.localAddress ? coach.localAddress : "등록된 주소가 없습니다"}
        </TextField>
      </SubWrapper> */}

      <SubWrapper>
        <ReviewWithButton>
          <h2>리뷰</h2>
          {showPost() && <button onClick={openModal}>작성하기</button>}
        </ReviewWithButton>
        <ReviewCard coachProfile={coach} />
      </SubWrapper>

      {isModal && (
        <Modal position="center" closeModal={closeModal}>
          <ReviewInner onClose={closeModal} id={coach.coachId} type="enroll" />
        </Modal>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TextField = styled.div`
  line-height: 1.5;
`;

const DescriptionTextField = styled(TextField)`
  min-height: 200px;
  background: ${({ theme }) => theme.color.box};
  border-radius: 8px;
  padding: 10px;
`;

const CaochingSports = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 9px;
  overflow: hidden;

  li {
    display: inline-flex;
    font-size: 16px;
    padding: 4px 10px;
    border: 1px solid ${({ theme }) => theme.color.primary};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    color: ${({ theme }) => theme.color.primary};
  }
`;

const ReviewWithButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    color: ${({ theme }) => theme.color.primary};
  }
`;
export default DetailInfo;
