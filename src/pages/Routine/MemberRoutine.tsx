import ActionModalInner from "@/components/common/modal/contents/ActionModalInner";
import RoutineContents from "@/components/common/modal/contents/RoutineContents";
import Modal from "@/components/common/modal/Modal";
import Profile from "@/components/Profile/Profile";
import RoutineList from "@/components/routine/RoutineList";
import { useGetRoutines } from "@/hooks/queries/routine/useRoutine";
import useModal from "@/hooks/useModal";
import { useProfileInfo } from "@/store/profileInfo.store";
import { WhiteSpace } from "@/style/global";
import { useState } from "react";
import { styled } from "styled-components";

const MemberRoutine = () => {
  const { isModal, openModal, closeModal } = useModal();
  const [isSelect, setIsSelect] = useState<boolean>(false);

  const userId = useProfileInfo((state) => state.userId);
  const profileName = useProfileInfo((state) => state.profileName);
  const profileImageUrl = useProfileInfo((state) => state.profileImageUrl);

  const { data, isLoading, isError } = useGetRoutines({ userId });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>무언가 잘못됨</div>;

  const onClickAdd = () => {
    openModal();
  };

  return (
    <MemberRoutineStyle>
      {isModal && (
        <Modal
          closeModal={closeModal}
          overlayDisabled={isSelect}
          position="center"
        >
          <ActionModalInner
            schema="routine-enroll"
            closeModal={closeModal}
            isCoach={true}
          >
            <RoutineContents setIsSelect={setIsSelect} />
          </ActionModalInner>
        </Modal>
      )}
      <Profile
        profileId={userId}
        profileName={profileName}
        profileImageUrl={profileImageUrl}
        width="380px"
        height="180px"
      />
      <AddTextStyle>
        <Button onClick={onClickAdd}>추가하기</Button>
      </AddTextStyle>
      <RoutineList routines={data} />
      <WhiteSpace $height={80} />
    </MemberRoutineStyle>
  );
};

const MemberRoutineStyle = styled.div``;

const AddTextStyle = styled.div`
  display: flex;
  justify-content: end;

  p {
    margin-top: 15px;
    color: ${({ theme }) => theme.color.primary};
    text-decoration: underline;
  }
`;

const Button = styled.button`
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  margin-left: auto;
`;

export default MemberRoutine;
