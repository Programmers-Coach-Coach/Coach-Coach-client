import { styled } from "styled-components";
import Profile from "../Profile";
import Empty from "@/components/common/Empty/Empty";
import { IMatchMembers } from "@/models/member.model";
import useModal from "@/hooks/useModal";
import Modal from "@/components/common/modal/Modal";
import RoutinePicker from "@/components/common/modal/contents/RoutinePicker";

interface InquiryProfileListProps {
  data: IMatchMembers[];
}

const InquriyProfileList = ({ data }: InquiryProfileListProps) => {
  const { isModal, openModal, closeModal } = useModal();
  return (
    <>
      {isModal && (
        <Modal closeModal={closeModal} position="footer-above">
          <RoutinePicker schema="add" closeModal={closeModal} />
        </Modal>
      )}
      {data.length ? (
        <InquiryProfileListStyle>
          {data.map(
            (d) =>
              !d.isMatching && (
                <Profile
                  key={d.userId}
                  profileId={d.userId}
                  profileName={d.userName}
                  profileImageUrl={d.profileImageUrl}
                  state="InquiryMember"
                  width="80px"
                  height="80px"
                  openModal={openModal}
                />
              )
          )}
        </InquiryProfileListStyle>
      ) : (
        <Empty
          name="coach"
          size="150px"
          color="text"
          descriptions="나의 코치가 없습니다"
        />
      )}
    </>
  );
};

const InquiryProfileListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  justify-items: center;
`;

export default InquriyProfileList;
