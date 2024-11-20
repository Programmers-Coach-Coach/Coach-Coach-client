import { CoachChatRoom, MemberChatRoom } from "@/models/chat.model";
import { styled } from "styled-components";
import profile from "@/assets/images/profile.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChatInfo } from "@/store/chat.store";

interface ChatRoomProps {
  chatRoom: MemberChatRoom | CoachChatRoom;
}
const ChatRoom = ({ chatRoom }: ChatRoomProps) => {
  const navigate = useNavigate();
  const [isClick, setIsClick] = useState(false);
  const setChatRoomId = useChatInfo((state) => state.setChatRoomId);
  const setActiveHours = useChatInfo((state) => state.setActiveHours);
  const setIsMatching = useChatInfo((state) => state.setIsMatching);

  const isMemberChatRoom = (
    room: MemberChatRoom | CoachChatRoom
  ): room is MemberChatRoom => {
    return "coachProfileImageUrl" in room;
  };

  const imageUrl = isMemberChatRoom(chatRoom)
    ? chatRoom.coachProfileImageUrl || profile
    : chatRoom.userProfileImageUrl || profile;

  const nickname = isMemberChatRoom(chatRoom)
    ? chatRoom.coachNickname || ""
    : chatRoom.userNickname || "";

  const coachingSports = isMemberChatRoom(chatRoom)
    ? chatRoom.coachingSports || []
    : [];

  const activeHours = isMemberChatRoom(chatRoom)
    ? chatRoom.activeHours || ""
    : "";

  const chatClickHandler = () => {
    setChatRoomId(chatRoom.chatRoomId);
    setActiveHours(activeHours);
    setIsMatching(chatRoom.isMatching);
    setIsClick(true);
  };

  useEffect(() => {
    if (isClick) {
      navigate(`/chat-room?nickname=${nickname}`);
    }
  }, [isClick, navigate, nickname]);

  return (
    <ChatRoomStyle onClick={chatClickHandler}>
      <ChatUserProfileStyle src={imageUrl} />
      <ChatDetailStyle>
        <ChatNameSportsTimeStyle>
          <ChatNameSportsStyle>
            <div className="nickname">{nickname}</div>
            <SportsStyle>
              {coachingSports.length > 0 &&
                coachingSports.map((sport) => (
                  <div key={sport} className="sport">
                    #{sport}
                  </div>
                ))}
            </SportsStyle>
          </ChatNameSportsStyle>
          <div className="time">{chatRoom.lastMessageCreatedAt}</div>
        </ChatNameSportsTimeStyle>
        <ChatLastStyle>
          <ChatLastMessageStyle>{chatRoom.lastMessage}</ChatLastMessageStyle>
          {chatRoom.unreadCount !== 0 && (
            <ChatUnreadStyle>{chatRoom.unreadCount}</ChatUnreadStyle>
          )}
        </ChatLastStyle>
      </ChatDetailStyle>
    </ChatRoomStyle>
  );
};

const ChatRoomStyle = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 20px 0 40px 0;
  cursor: pointer;

  @media (min-width: 600px) {
    padding: 3vw 0 6vw 0;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 3vw;
    left: 1%;
    width: 98%;
    height: 0.08rem;
    background-color: rgba(255, 255, 255, 0.5);

    @media (min-width: 600px) {
      bottom: 20px;
    }
  }
`;

const ChatUserProfileStyle = styled.img`
  width: 20vw;
  height: 20vw;
  border-radius: ${({ theme }) => theme.borderRadius.default};

  @media (min-width: 600px) {
    width: 80px;
    height: 80px;
  }
`;

const ChatDetailStyle = styled.div`
  width: 76vw;
  height: 13vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.4vw;

  @media (min-width: 600px) {
    width: 460px;
    height: 80px;
    padding: 0 10px;
  }
`;

const ChatNameSportsTimeStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8vw;

  @media (min-width: 600px) {
    font-size: 5px;
  }

  .nickname {
    font-size: 3vw;
    font-weight: bold;
    @media (min-width: 600px) {
      font-size: 18px;
    }
  }

  .sport {
    font-size: 2vw;
    color: #0075ff;
    margin-top: 0.5vw;
    margin-left: 1vw;
    @media (min-width: 600px) {
      font-size: 12px;
      margin-top: 3px;
      margin-left: 5px;
    }
  }

  .time {
    font-size: 2vw;
    margin-right: 0.5vw;
    @media (min-width: 600px) {
      font-size: 12px;
      margin-right: 4px;
    }
  }
`;

const ChatNameSportsStyle = styled.div`
  display: flex;
`;

const SportsStyle = styled.div`
  display: flex;
`;

const ChatLastStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.8vw;
  @media (min-width: 600px) {
    margin-top: 5px;
  }
`;

const ChatLastMessageStyle = styled.div`
  width: 50vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #808080;
  font-size: 2.3vw;
  @media (min-width: 600px) {
    width: 300px;
    font-size: 14px;
  }
`;

const ChatUnreadStyle = styled.div`
  width: 3vw; /* 원의 너비 */
  height: 3vw; /* 원의 높이 */
  background-color: #0075ff; /* 원의 배경색 */
  border-radius: 50%; /* 원형을 만들기 위해 반지름을 50%로 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.3vw; /* 텍스트 크기 */
  @media (min-width: 600px) {
    width: 18px; /* 원의 너비 */
    height: 18px; /* 원의 높이 */
    font-size: 14px; /* 텍스트 크기 */
  }
`;

export default ChatRoom;
