import AddPhysicalContent from "@/components/common/modal/contents/AddPhysicalContent";
import Modal from "@/components/common/modal/Modal";
import ExerciseCalender from "@/components/record/exerciseRecord/ExerciseCalendar";
import PhysicalRecordChart from "@/components/record/physicalRecord/PhysicalRecordChart";
import useModal from "@/hooks/useModal";
import { WhiteSpace } from "@/style/global";
import styled from "styled-components";

const Record = () => {
  const { isModal, closeModal, handleModal } = useModal();
  return (
    <Wrapper>
      <HeaderWithDesc>
        <h2>운동 기록</h2>
        <p className="b2">날짜를 터치하면 상세한 내 기록을 볼 수 있어요</p>
      </HeaderWithDesc>
      <ExerciseCalender />
      <WhiteSpace $height={30} />
      <HeaderWithDesc>
        <h2>신체 기록</h2>
        <p className="b2">내 기록의 변화를 그래프로 볼 수 있어요</p>
        <AddPhyisicalButton onClick={handleModal}>
          오늘의 신체 정보 기록하기
        </AddPhyisicalButton>
      </HeaderWithDesc>
      <PhysicalRecordChart />

      {isModal && (
        <Modal closeModal={closeModal} position="footer-above">
          <AddPhysicalContent
            weight={null}
            skeletalMuscle={50}
            fatPercentage={50}
            bmi={50}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const HeaderWithDesc = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  h2 {
    font-size: 15px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: -0.25px;
  }

  p {
    font-size: 10px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: -0.375;
  }
`;

export const AddPhyisicalButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  font-size: 10px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: -0.375;
  width: 128px;
  height: 30px;
  color: #fff;
  background-color: #0075ff;
  border-radius: 10px;
`;

export default Record;
