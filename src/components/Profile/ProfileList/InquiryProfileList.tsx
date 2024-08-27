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
  const filteredData = data.filter((d) => d.isMatching === false);
  const { isModal, openModal, closeModal } = useModal();
  return (
    <>
      {isModal && (
        <Modal closeModal={closeModal} position="footer-above">
          <RoutinePicker schema="inquiry" closeModal={closeModal} />
        </Modal>
      )}
      {filteredData.length ? (
        <InquiryProfileListStyle>
          {filteredData.map((d) => (
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
          ))}
        </InquiryProfileListStyle>
      ) : (
        <Empty
          name="person"
          size="80px"
          color="gray3"
          descriptions="문의 회원이 없습니다"
          padding="10px"
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
