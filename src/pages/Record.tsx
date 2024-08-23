import CustomButton from "@/components/common/Button/CustomButton";
import Modal from "@/components/common/modal/Modal";
import PhysicalRecordInner from "@/components/modal/PhysicalRecordInner";
import ExerciseCalender from "@/components/record/exerciseRecord/ExerciseCalendar";
import PhysicalRecordChart from "@/components/record/physicalRecord/PhysicalRecordChart";
import useModal from "@/hooks/useModal";
import { WhiteSpace } from "@/style/global";
import styled from "styled-components";

const Record = () => {
  const { isModal, openModal, closeModal } = useModal();
  return (
    <Wrapper>
      <HeaderWithDesc>
        <h2>운동 기록</h2>
        <p className="b2">
          운동 기록과 신체 기록을 보고 싶다면 해당 일자를 클릭해보아요
        </p>
      </HeaderWithDesc>
      <WhiteSpace $height={10} />
      <ExerciseCalender />
      <WhiteSpace $height={30} />
      <HeaderWithDesc>
        <Header>
          <h2>신체 기록</h2>
          <CustomButton
            size="super-mini"
            variant="contained"
            onClick={openModal}
          >
            변경
          </CustomButton>
        </Header>
      </HeaderWithDesc>
      <PhysicalRecordChart />
      {isModal && (
        <Modal closeModal={closeModal} position="footer-above">
          <PhysicalRecordInner />
        </Modal>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const HeaderWithDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Record;
