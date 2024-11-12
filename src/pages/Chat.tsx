import DefaultTab from "@/components/tab/DefaultTab";
import { useState } from "react";
import { styled } from "styled-components";
import IconButton from "@/components/Icon/IconButton";
import useResponsiveIconSize from "@/hooks/useResponsiveIconSize";
import useModal from "@/hooks/useModal";
import Modal from "@/components/common/modal/Modal";
import OneButtonContent from "@/components/common/modal/contents/OneButtonContent";
import MemberFilterContent from "@/components/common/modal/contents/MemberFilterContent";

const FILTER = ["전체 보기", "일반 채팅", "문의 채팅"];

const Chat = () => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [filterIndex, setFilterIndex] = useState<number>(0);
  const filterModal = useModal();
  const iconSize = useResponsiveIconSize("3vw", "14px", 600);

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <>
      {filterModal.isModal && (
        <Modal closeModal={filterModal.closeModal} position="footer-above">
          <OneButtonContent title="채팅방 필터" buttonText="선택완료">
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
          <IconButton name="arrow" size={iconSize} color="gray3" />
        </FilterStyle>
        {tabValue === 0 ? "회원 채팅방" : "코치 채팅방"}
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
