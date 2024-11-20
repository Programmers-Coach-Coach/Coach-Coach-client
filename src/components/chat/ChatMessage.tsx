import { useChatInfo } from "@/store/chat.store";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";
import SvgIcon from "../Icon/SvgIcon";

type Message = {
  content: string;
  sender: string | null; // null 허용
};

const ChatMessage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nickname = queryParams.get("nickname");
  const chatRoomId = useChatInfo((state) => state.chatRoomId);
  const activeHours = useChatInfo((state) => state.activeHours);
  const isMatching = useChatInfo((state) => state.isMatching);

  const [messages, setMessages] = useState<Message[]>([]); // 메시지 상태
  const [inputValue, setInputValue] = useState(""); // 입력 필드 상태

  const initialMessages = [
    { content: "안녕하세요.", sender: "나" },
    { content: "제가 지금 재활치료를 받고 있는데요", sender: "나" },
    { content: "병행해서 트레이닝 가능할까요?", sender: "나" },
    { content: "반갑습니다, 정회원님😄", sender: nickname },
    { content: "물론입니다!", sender: nickname },
    {
      content:
        "저는 헬스트레이너 지도사 1급과 함께 운동 처방사 1급 자격증도 보유하고 있어서 안전하고 효율적인 트레이닝이 가능합니다.",
      sender: nickname
    }
  ];
  // 입력 필드 변경 핸들러
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // 메시지 전송
  const sendMessage = () => {
    if (inputValue) {
      const newMessage: Message = {
        content: inputValue,
        sender: "나" // 닉네임이 없으면 '익명'으로 설정
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]); // 새 메시지 추가
      setInputValue(""); // 입력 필드 초기화
    }
  };

  useEffect(() => {
    setMessages(initialMessages); // 기존 메시지 가져오기
  }, [chatRoomId]);

  const title = (() => {
    if (activeHours.length > 0 && isMatching) return "코치님과 매칭되었습니다";
    if (activeHours.length > 0 && !isMatching)
      return "코치님께 문의하는 채팅방이에요";
    if (activeHours.length === 0 && isMatching)
      return `${nickname}님과 매칭되었어요`;
    if (activeHours.length === 0 && !isMatching)
      return `${nickname}님께서 매칭을 요청했어요`;
    return "Error";
  })();

  return (
    <ChatMessageStyle>
      <ChatTitleStyle>
        <div className="title">{title}</div>
        {activeHours.length > 0 && (
          <AbleTimeStyle>
            {`${nickname}님의 채팅 가능 시간은 `}
            <HighlightedText>{activeHours}</HighlightedText>
            {` 에요`}
          </AbleTimeStyle>
        )}
      </ChatTitleStyle>
      <ChatContainer>
        {Array.isArray(messages) &&
          messages.map((item, index) =>
            item.sender === "나" ? (
              <MyChatStyle key={index}>{item.content}</MyChatStyle>
            ) : (
              <PartnerChatStyle key={index}>{item.content}</PartnerChatStyle>
            )
          )}
      </ChatContainer>
      <ChatInputAndButtonStyle>
        <ChatInputStyle
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="메시지를 입력하세요"
        />
        <SvgIcon
          name="send"
          width="60px"
          height="60px"
          fill="#0075FF"
          onClick={sendMessage}
        />
      </ChatInputAndButtonStyle>
    </ChatMessageStyle>
  );
};

const ChatMessageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  position: relative; /* 하단 입력 필드 위치 조정을 위해 relative 추가 */
  height: 100vh; /* 전체 화면 높이 사용 */
`;

const ChatContainer = styled.div`
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1; /* 화면의 남은 공간을 채움 */
`;

const ChatTitleStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  width: 100%;

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .ableTime {
    font-size: 12px;
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

const AbleTimeStyle = styled.div`
  word-wrap: break-word;
  white-space: pre-wrap;
  font-size: 12px;
`;

const HighlightedText = styled.span`
  color: #0075ff;
`;

const PartnerChatStyle = styled.div`
  align-self: flex-start; /* 부모 컨테이너 기준 왼쪽 정렬 */
  background-color: #0075ff;
  color: #ffffff;
  border-radius: 20px;
  max-width: 350px;
  min-height: 40px;
  padding: 10px 15px;
  margin: 5px 0;
  word-wrap: break-word;
  white-space: pre-wrap;
  display: inline-block; /* 글자 크기에 따라 넓이 조정 */
`;

const MyChatStyle = styled.div`
  align-self: flex-end; /* 부모 컨테이너 기준 오른쪽 정렬 */
  background-color: #3a3a3a;
  color: #ffffff;
  border-radius: 20px;
  max-width: 350px;
  min-height: 40px;
  padding: 10px 15px;
  margin: 5px 0;
  word-wrap: break-word;
  white-space: pre-wrap;
  display: inline-block;
  margin-left: auto; /* 오른쪽 끝으로 이동 */
`;

const ChatInputAndButtonStyle = styled.div`
  display: flex;
  align-items: center; /* 입력 필드와 버튼을 세로 중앙 정렬 */
  position: absolute;
  bottom: 150px; /* 화면 하단에서 10px 위로 */
  left: 50%; /* 화면 중앙 정렬을 위해 왼쪽 50% 이동 */
  transform: translateX(-50%); /* 중앙 정렬 보정 */
  width: 100%; /* 부모 컨테이너 너비에 맞춤 */
  max-width: 600px; /* 최대 너비 제한 */
  padding: 10px;
  background-color: #1e1e1e; /* 배경색 추가 (선택 사항) */
  border-radius: 10px; /* 테두리 둥글게 */

  svg {
    margin-left: 10px;
  }
`;

const ChatInputStyle = styled.input`
  flex-grow: 1; /* 남은 공간을 채움 */
  min-height: 60px;
  border-radius: 10px;
  background-color: #252932;
  padding-left: 20px;
  font-size: 18px;
  color: #ffffff;
  border: none; /* 테두리 제거 */
  outline: none; /* 포커스 시 테두리 제거 */

  &::placeholder {
    color: #777c89;
    font-size: 18px;
  }
`;

export default ChatMessage;
