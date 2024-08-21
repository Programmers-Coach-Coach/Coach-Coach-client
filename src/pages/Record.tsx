import CustomButton from "@/components/common/Button/CustomButton";
import Modal from "@/components/common/modal/Modal";
import PhysicalRecordInner from "@/components/modal/PhysicalRecordInner";
import PhysicalRecordChart from "@/components/record/physicalRecord/PhysicalRecordChart";
import useModal from "@/hooks/useModal";
import styled from "styled-components";

const Record = () => {
  const { isModal, openModal, closeModal } = useModal();
  return (
    <Wrapper>
      <Header>
        <h2>오늘의 신체 정보</h2>
        <CustomButton size="super-mini" variant="contained" onClick={openModal}>
          변경
        </CustomButton>
      </Header>
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export default Record;
