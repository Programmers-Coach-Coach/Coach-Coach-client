import { styled } from "styled-components";
import Profile from "../Profile";
import Empty from "@/components/common/Empty/Empty";
import { IMatchMembers } from "@/models/member.model";
import useModal from "@/hooks/useModal";
import Modal from "@/components/common/modal/Modal";
import RoutinePicker from "@/components/common/modal/contents/RoutinePicker";

interface MatchingProfileListProps {
  data: IMatchMembers[];
}

const MatchingProfileList = ({ data }: MatchingProfileListProps) => {
  const filteredData = data.filter((d) => d.isMatching === true);
  const { isModal, openModal, closeModal } = useModal();
  return (
    <>
      {isModal && (
        <Modal closeModal={closeModal} position="footer-above">
          <RoutinePicker schema="write" closeModal={closeModal} />
        </Modal>
      )}
      {filteredData.length ? (
        <MatchingProfileListStyle>
          {filteredData.map((d) => (
            <Profile
              key={d.userId}
              profileId={d.userId}
              profileName={d.userName}
              profileImageUrl={d.profileImageUrl}
              state="MatchingMember"
              width="80px"
              height="80px"
              openModal={openModal}
            />
          ))}
        </MatchingProfileListStyle>
      ) : (
        <Empty
          name="twins"
          size="80px"
          color="text"
          descriptions="나의 회원이 없습니다"
          padding="10px"
        />
      )}
    </>
  );
};

const MatchingProfileListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  justify-items: center;
`;

export default MatchingProfileList;
