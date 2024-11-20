import ChatRoomList from "@/components/chat/ChatRoomList";
import MemberFilterContent from "@/components/common/modal/contents/MemberFilterContent";
import OneButtonContent from "@/components/common/modal/contents/OneButtonContent";
import Modal from "@/components/common/modal/Modal";
import SvgIcon from "@/components/Icon/SvgIcon";
import DefaultTab from "@/components/tab/DefaultTab";
import { useGetCoachChats, useGetMemberChats } from "@/hooks/queries/useChat";
import useModal from "@/hooks/useModal";
import useResponsiveIconSize from "@/hooks/useResponsiveIconSize";
import { useState } from "react";
import { styled } from "styled-components";

const FILTER = ["전체 보기", "일반 채팅", "문의 채팅"];
const Chat = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [filterIndex, setFilterIndex] = useState<number>(0);
  const filterModal = useModal();
  const iconSize = useResponsiveIconSize("3vw", "14px", 600);

  const memberChatsResponse = useGetMemberChats();
  const coachChatsResponse = useGetCoachChats();

  if (memberChatsResponse.isLoading || coachChatsResponse.isLoading)
    return <div>로딩 중...</div>;
  if (
    memberChatsResponse.isError ||
    coachChatsResponse.isError ||
    !memberChatsResponse.data ||
    !coachChatsResponse.data
  )
    return <div>무언가 잘못됨</div>;

  let filterMemberChats;
  let filterCoachChats;

  if (filterIndex === 0) {
    filterMemberChats = memberChatsResponse.data;
    filterCoachChats = coachChatsResponse.data;
  } else if (filterIndex === 1) {
    filterMemberChats = memberChatsResponse.data.filter((m) => m.isMatching);
    filterCoachChats = coachChatsResponse.data.filter((c) => c.isMatching);
  } else if (filterIndex === 2) {
    filterMemberChats = memberChatsResponse.data.filter((m) => !m.isMatching);
    filterCoachChats = coachChatsResponse.data.filter((c) => !c.isMatching);
  }

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <>
      {filterModal.isModal && (
        <Modal closeModal={filterModal.closeModal} position="footer-above">
          <OneButtonContent title="회원 정렬" buttonText="선택완료">
            <MemberFilterContent
              filterList={FILTER}
              selectIndex={filterIndex}
              setFilterIndex={setFilterIndex}
              closeModal={filterModal.closeModal}
            />
          </OneButtonContent>
        </Modal>
      )}
      <ChatStyle>
        <DefaultTab
          value={tabValue}
          labels={["회원 채팅방", "코치 채팅방"]}
          onTabChange={handleTabChange}
        />
        <FilterStyle onClick={() => filterModal.openModal()}>
          {FILTER[filterIndex]}
          <SvgIcon
            name="arrow"
            width={iconSize}
            height={iconSize}
            fill="gray3"
          />
        </FilterStyle>
        {tabValue === 0 ? (
          <ChatRoomList
            chatRooms={filterMemberChats ? filterMemberChats : []}
          />
        ) : (
          <ChatRoomList chatRooms={filterCoachChats ? filterCoachChats : []} />
        )}
      </ChatStyle>
    </>
  );
};

const ChatStyle = styled.div``;

const FilterStyle = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
  cursor: pointer;
  color: #cacaca;
  font-size: 3vw;
  padding: 2.5vw;
  @media (min-width: 600px) {
    font-size: 14px;
    padding: 10px;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 1%;
    width: 98%;
    height: 0.08rem;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export default Chat;
