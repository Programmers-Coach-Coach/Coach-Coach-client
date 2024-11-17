import Progress from "@/components/common/InputField/Progress/Progress";
import AddModal from "@/components/common/modal/AddModal";
import DraggableIcon from "@/components/Icon/DraggableIcon";
import IconButton from "@/components/Icon/IconButton";
import SliderProfileList from "@/components/Profile/ProfileList/SliderProfileList";
import RoutineList from "@/components/routine/RoutineList";
import { useGetRoutines } from "@/hooks/queries/useRoutine";
import useResponsiveIconSize from "@/hooks/useResponsiveIconSize";
import { WhiteSpace } from "@/style/global";
import { formatCurrentDate } from "@/utils/formatDate";
import { useRef, useState } from "react";
import { styled } from "styled-components";

const DATA = [
  { profileImageUrl: "", name: "가가가" },
  { profileImageUrl: "", name: "나나나" },
  { profileImageUrl: "", name: "다다다" },
  { profileImageUrl: "", name: "라라라" },
  { profileImageUrl: "", name: "마마마" },
  { profileImageUrl: "", name: "바바바" },
  { profileImageUrl: "", name: "사사사" },
  { profileImageUrl: "", name: "아아아" },
  { profileImageUrl: "", name: "자자자" },
  { profileImageUrl: "", name: "차차차" },
  { profileImageUrl: "", name: "카카카" },
  { profileImageUrl: "", name: "타타타" },
  { profileImageUrl: "", name: "파파파" },
  { profileImageUrl: "", name: "하하하" }
];

const MemberRoutine = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false); // 드래그 상태 추가
  const iconSize = useResponsiveIconSize("3vw", "16px", 600);
  const { data, isLoading, isError } = useGetRoutines();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>무언가 잘못됨</div>;

  const currentDate = formatCurrentDate();

  const handleKeyDown = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`; // 입력에 따라 높이 조정
    }
  };

  // 드래그 중이 아닐 때만 openHandler 실행
  const openHandler = () => {
    if (!isDragging) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      {isOpen && <BlurStyle />}
      <MemberRoutineStyle>
        <div className="title">내 회원</div>
        <SliderProfileList data={DATA} />
        <Wrap>
          <MemberDescriptionStyle>
            <MemberTagsStyle>
              <MemberTagStyle color="primary">#헬스</MemberTagStyle>
              <MemberTagStyle color="review">#필라테스</MemberTagStyle>
            </MemberTagsStyle>
            <div className="date">트레이닝 시작일 : 2024. 10. 02.</div>
          </MemberDescriptionStyle>
          <ChatButtontyle>
            <div className="chat">채팅하기</div>
            <IconButton name="chat" size={iconSize} color="text" />
          </ChatButtontyle>
        </Wrap>
        <UnderlinedInput
          rows={1}
          placeholder="회원님께 오늘의 한마디를 남겨주세요"
          onKeyDown={handleKeyDown}
          ref={textareaRef}
        />
        <RoutineTextStyle>
          <h1>오늘의 루틴</h1>
          <p className="b3">{currentDate}</p>
        </RoutineTextStyle>
        <Progress value={data.completionPercentage} />
        <RoutineList routines={data.routines} isCheck={false} />
        <WhiteSpace $height={80} />
        <DraggableIcon isDraggingFn={setIsDragging}>
          {isOpen ? (
            <AddModal openHandler={openHandler} />
          ) : (
            <IconButton
              name="addRoutine"
              size="60px"
              color="primary"
              onClick={openHandler}
            />
          )}
        </DraggableIcon>
      </MemberRoutineStyle>
    </>
  );
};

const BlurStyle = styled.div`
  position: fixed;
  inset: 0;
  align-items: center;
  max-width: 100vw;
  height: 100vh;
  background: rgba(24, 26, 32, 0.7);
  backdrop-filter: blur(1px);
  z-index: 1002;
`;

const MemberRoutineStyle = styled.div`
  .title {
    font-size: 4vw;
    margin: 3vw 3vw;
    font-weight: bold;
    @media (min-width: 600px) {
      font-size: 24px;
      margin: 20px 20px;
    }
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5vw 0 3.5vw 0;
  @media (min-width: 600px) {
    margin: 30px 0 20px 0;
    padding: 0 20px;
  }
`;

const MemberDescriptionStyle = styled.div`
  .date {
    font-size: 2.4vw;
    margin: 0.8vw 0;
    @media (min-width: 600px) {
      font-size: 12px;
      margin: 5px 0;
    }
  }
`;

const MemberTagsStyle = styled.div`
  display: flex;
`;

const MemberTagStyle = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  background-color: ${({ theme, color }) => theme.color[color]};
  border-radius: 20px;
  padding: 1vw 1.5vw;
  margin-right: 1.3vw;
  font-size: 2.4vw;
  height: 5vw;

  @media (min-width: 600px) {
    font-size: 12px;
    height: 24px;
    padding: 5px 10px;
    margin-right: 8px;
  }
`;

const ChatButtontyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 8vw;
  font-size: 3vw;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 5px;
  cursor: pointer;

  svg {
    margin-left: 5px;
  }

  @media (min-width: 600px) {
    width: 150px;
    height: 40px;
    font-size: 16px;
  }
`;

const RoutineTextStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${({ theme }) => theme.color.primary};
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 14px;
    }

    p {
      font-size: 12px;
    }
  }
`;

const UnderlinedInput = styled.textarea`
  border: none;
  border-top: 2px solid #666666; /* 위쪽 선 */
  border-bottom: 2px solid #666666; /* 아래쪽 선 */
  background: none;
  outline: none;
  padding: 8px;
  font-size: 16px;
  width: 100%; /* 너비를 100%로 설정 */
  resize: none; /* 사용자가 크기를 조절하지 못하도록 설정 */
  overflow: hidden; /* 내용이 넘치지 않도록 설정 */
  color: white;
`;

export default MemberRoutine;
