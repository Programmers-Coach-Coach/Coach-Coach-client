import CustomButton from "@/components/common/Button/CustomButton";
import Modal from "@/components/common/modal/Modal";
import PhysicalRecordInner from "@/components/modal/PhysicalRecordInner";
import useModal from "@/hooks/useModal";
import { IDetailPhysicalMetrics } from "@/models/record.model";
import styled from "styled-components";
import PhysicalRecordInputs from "./PhysicalRecordInputs";

interface Props extends IDetailPhysicalMetrics {}
const PhysicalRecord = ({
  weight,
  skeletalMuscle,
  fatPercentage,
  bmi
}: Props) => {
  const { isModal, openModal, closeModal } = useModal();
  return (
    <Wrapper>
      <Header>
        <h2>오늘의 신체 정보</h2>
        <CustomButton size="super-mini" variant="contained" onClick={openModal}>
          변경
        </CustomButton>
      </Header>
      <Main>
        <PhysicalRecordInputs
          disabled={true}
          weight={weight}
          skeletalMuscle={skeletalMuscle}
          fatPercentage={fatPercentage}
          bmi={bmi}
        />
      </Main>

      {isModal && (
        <Modal closeModal={closeModal} position="footer-above">
          <PhysicalRecordInner
            weight={weight}
            skeletalMuscle={skeletalMuscle}
            fatPercentage={fatPercentage}
            bmi={bmi}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const Main = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.default};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;
export default PhysicalRecord;
