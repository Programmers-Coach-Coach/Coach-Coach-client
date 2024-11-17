import Modal from "@/components/common/modal/Modal";
import AddPhysicalContent from "@/components/common/modal/contents/AddPhysicalContent";
import useModal from "@/hooks/useModal";
import { IDetailPhysicalMetrics } from "@/models/record.model";
import { AddPhyisicalButton, HeaderWithDesc } from "@/pages/Record";
import styled from "styled-components";
import PhysicalDetailRecord from "./PhysicalDetailRecord";

interface Props extends IDetailPhysicalMetrics {}
const PhysicalRecord = ({
  weight,
  skeletalMuscle,
  fatPercentage,
  bmi
}: Props) => {
  const { isModal, closeModal, handleModal } = useModal();

  return (
    <Wrapper>
      <HeaderWithDesc>
        <h2>오늘의 신체 정보</h2>
        <AddPhyisicalButton onClick={handleModal}>
          오늘의 신체 정보 기록하기
        </AddPhyisicalButton>
      </HeaderWithDesc>
      <PhysicalDetailRecord
        weight={weight}
        skeletalMuscle={skeletalMuscle}
        fatPercentage={fatPercentage}
        bmi={bmi}
      />

      {isModal && (
        <Modal closeModal={closeModal} position="footer-above">
          <AddPhysicalContent
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
`;

export default PhysicalRecord;
