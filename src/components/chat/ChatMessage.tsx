import { useChatInfo } from "@/store/chat.store";
import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { CompatClient, Stomp } from "@stomp/stompjs";

type Message = {
  content: string;
  sender: string;
};
const ChatMessage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nickname = queryParams.get("nickname");
  const chatRoomId = useChatInfo((state) => state.chatRoomId);
  const activeHours = useChatInfo((state) => state.activeHours);
  const isMatching = useChatInfo((state) => state.isMatching);
  //웹소켓 연결 객체
  const stompClient = useRef<CompatClient | null>(null);
  // 메시지 리스트
  const [messages, setMessages] = useState<Message[]>([]);
  // 사용자 입력을 저장할 변수
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  //메세지 전송
  const sendMessage = () => {
    if (stompClient.current && inputValue) {
      //현재로서는 임의의 테스트 값을 삽입
      const body = {
        id: 1,
        name: "테스트1",
        message: inputValue
      };
      stompClient.current.send(
        `/pub/chat-rooms/${chatRoomId}`,
        {},
        JSON.stringify(body)
      );
      setInputValue("");
    }
  };

  useEffect(() => {
    connect();
    fetchMessages();
    // 컴포넌트 언마운트 시 웹소켓 연결 해제
    return () => disconnect();
  }, []);

  const connect = () => {
    //웹소켓 연결
    const socket = new WebSocket("ws://localhost:8080/ws");
    stompClient.current = Stomp.over(socket);
    stompClient.current.connect({}, () => {
      //메시지 수신(1은 roomId를 임시로 표현)
      stompClient.current?.subscribe(
        `/sub/chat-rooms/${chatRoomId}`,
        (message) => {
          //누군가 발송했던 메시지를 리스트에 추가
          const newMessage: Message = JSON.parse(message.body);
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        }
      );
    });
  };

  const fetchMessages = () => {
    return axios
      .get("/v1/chat-rooms/{chatRoomId}/messages")
      .then((response) => {
        setMessages(response.data);
      });
  };

  const disconnect = () => {
    if (stompClient.current) {
      stompClient.current.disconnect();
    }
  };

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
          <>
            <AbleTimeStyle>
              {`${nickname}님의 채팅 가능 시간은 `}
              <HighlightedText>{activeHours}</HighlightedText>
              {` 에요`}
            </AbleTimeStyle>
          </>
        )}
      </ChatTitleStyle>

      <ul>
        <div>
          {/* 입력 필드 */}
          <input type="text" value={inputValue} onChange={handleInputChange} />
          {/* 메시지 전송, 메시지 리스트에 추가 */}
          <button onClick={sendMessage}>입력</button>
        </div>
        {/* 메시지 리스트 출력 */}
        {messages.map((item, index) => (
          <div key={index} className="list-item">
            {item.content}
          </div>
        ))}
      </ul>
    </ChatMessageStyle>
  );
};

const ChatMessageStyle = styled.div``;

const ChatTitleStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

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
  word-wrap: break-word; /* 긴 단어 자동 줄바꿈 */
  white-space: pre-wrap; /* 공백 유지 및 줄바꿈 가능 */
  font-size: 12px;
`;

const HighlightedText = styled.span`
  color: #0075ff;
`;

export default ChatMessage;
