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
      <SubWrapper>
        <h2>활동중인 센터</h2>
        <TextField>
          {coach.activeCenterDetail
            ? `${coach.activeCenter} ${coach.activeCenterDetail}`
            : "등록된 센터 정보가 없습니다"}
        </TextField>
      </SubWrapper>
      <SubWrapper>
        <h2>주소</h2>
        <TextField>
          {coach.localAddress ? coach.localAddress : "등록된 주소가 없습니다"}
        </TextField>
      </SubWrapper>

      <SubWrapper>
        <ReviewWithButton>
          <h2>리뷰</h2>
          <button onClick={openModal}>작성하기</button>
        </ReviewWithButton>
        <ReviewCard coachProfile={coach} />
      </SubWrapper>
      {/* TODO: 문의하기 페이지에서 오픈 카카오톡 링크로 이동할 수 있게함 */}
      {/* <SubWrapper>
        <h2>오픈 카카오톡 링크</h2>
        <CustomButton variant="outlined" size="small" onClick={() => {}}>
          kakaotalk
        </CustomButton>
      </SubWrapper> */}

      {isModal && (
        <Modal position="center" closeModal={closeModal}>
          <ReviewInner onClose={closeModal} onEnroll={() => {}} />
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
  align-items: center;
  gap: 9px;
  li {
    display: inline-flex;
    font-size: 12px;
    padding: 4px 6px;
    border-radius: ${({ theme }) => theme.borderRadius.default};
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.gray1};
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
