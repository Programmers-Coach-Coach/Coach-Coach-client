import IconButton from "@/components/Icon/IconButton";
import InqueryCoachProfileList from "@/components/Profile/ProfileList/InqueryCoachProflieList";
import MyCoachesProfileList from "@/components/Profile/ProfileList/MyCoachesProfileList";
import { useMyCoachList } from "@/hooks/useCoachList";
import { WhiteSpace } from "@/style/global";
import { styled } from "styled-components";

const MyCoach = () => {
  const { data, isLoading, isError } = useMyCoachList();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>무언가 잘못됨</div>;

  return (
    <MyCoachStyle>
      <ProfileHeader>
        <SectionStyle>
          <p className="title">내 코치</p>
          <WhiteSpace $height={3} />
          <p className="desc">현재 나와 함께하고 있는 코치님이에요.</p>
        </SectionStyle>
        <ChatCardStyle>
          <p className="chat">채팅하기</p>
          <IconButton name="chat" size="0.7rem" color="text" />
        </ChatCardStyle>
      </ProfileHeader>
      <MyCoachesProfileList data={data} />
      <ProfileHeader>
        <SectionStyle>
          <p className="title">매칭 대기 중인 코치</p>
          <WhiteSpace $height={3} />
          <p className="desc">곧 나와 함께 할 코치님이에요.</p>
        </SectionStyle>
      </ProfileHeader>
      <InqueryCoachProfileList data={data} />
    </MyCoachStyle>
  );
};

const MyCoachStyle = styled.div`
  padding-bottom: 60px;
`;

const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  position: relative;

  svg {
    margin-top: 10px;
  }

  .title {
    font-size: 1.4rem;
    font-weight: bold;

    @media (max-width: 375px) {
      font-size: 16px;
    }
  }

  .desc {
    font-size: 0.7rem;
    color: #808080;

    @media (max-width: 375px) {
      font-size: 8px;
    }
  }

  .chat {
    font-size: 0.7rem;
  }

  /* 밑줄 */
  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 3%;
    width: 94%;
    height: 0.08rem;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const SectionStyle = styled.div`
  margin-left: 20px;
`;

const ChatCardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  width: 150px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.default};

  svg {
    margin-bottom: 10px;
    margin-left: 5px;
  }

  @media (max-width: 375px) {
    width: 80px;
    height: 30px;
    margin-right: 10px;
  }
`;

export default MyCoach;
