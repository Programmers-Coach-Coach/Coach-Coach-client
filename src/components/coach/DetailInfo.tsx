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
        <TextField>{coach.coachIntroduction}</TextField>
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
          <button onClick={openModal}>작성하기</button>
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
  gap: 10px;
`;

const TextField = styled.div`
  line-height: 1.5;
  word-break: keep-all;
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
