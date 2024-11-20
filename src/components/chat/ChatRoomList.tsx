import { CoachChatRoom, MemberChatRoom } from "@/models/chat.model";
import { styled } from "styled-components";
import Empty from "../common/Empty/Empty";
import ChatRoom from "./ChatRoom";

interface ChatRoomListProps {
  chatRooms: MemberChatRoom[] | CoachChatRoom[];
}
const ChatRoomList = ({ chatRooms }: ChatRoomListProps) => {
  return (
    <>
      {chatRooms.length ? (
        <ChatRoomListStyle>
          {chatRooms.map((chatRoom) => (
            <ChatRoom key={chatRoom.chatRoomId} chatRoom={chatRoom} />
          ))}
        </ChatRoomListStyle>
      ) : (
        <Empty
          name="coach"
          size="80px"
          color="gray3"
          descriptions="나의 코치가 없습니다"
          padding="10px"
        />
      )}
    </>
  );
};

const ChatRoomListStyle = styled.div`
  justify-items: center;
`;

export default ChatRoomList;
