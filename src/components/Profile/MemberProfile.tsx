import { styled } from "styled-components";
import profile from "@/assets/images/profile.png";
import IconButton from "../Icon/IconButton";
import useResponsiveIconSize from "@/hooks/useResponsiveIconSize";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SvgIcon from "../Icon/SvgIcon";
import { IGetMyMember } from "@/models/member.model";

interface MemberProfileProps {
  member: IGetMyMember;
}

const MemberProfile = ({ member }: MemberProfileProps) => {
  const imageUrl = member.profileImageUrl ? member.profileImageUrl : profile;
  const iconSize = useResponsiveIconSize("3.5vw", "24px", 600);
  const [isSet, setIsSet] = useState(false);
  const navigate = useNavigate();

  const dumbbellClickHandler = () => {
    if (member.isMatching) {
      setIsSet(true);
    }
  };

  useEffect(() => {
    if (isSet) {
      navigate("/member/routine");
    }
  }, [isSet, navigate]);

  return (
    <MemberProfileStyle>
      <MemberProfileImageStyle src={imageUrl} alt="profile" />
      <MemberProfileDetailStyle>
        <div className="name">{member.userName}</div>
        <MemberTagsStyle>
          <MemberTagStyle color="primary">#헬스</MemberTagStyle>
          <MemberTagStyle color="review">#필라테스</MemberTagStyle>
        </MemberTagsStyle>
        <div className="date">트레이닝 시작일 : 2024. 10. 02.</div>
      </MemberProfileDetailStyle>
      <MemberProfileButtonStyle>
        <ChatButtontyle>
          <div className="chat">채팅하기</div>
          <IconButton name="chat" size={iconSize} color="text" />
        </ChatButtontyle>
        <RoutineButtontyle onClick={dumbbellClickHandler}>
          <div className="chat">
            {member.isMatching ? "루틴 등록하기" : "매칭수락"}
          </div>
          <SvgIcon
            name="dumbbell"
            width={iconSize}
            height={iconSize}
            fill="text"
          />
        </RoutineButtontyle>
      </MemberProfileButtonStyle>
    </MemberProfileStyle>
  );
};

const MemberProfileStyle = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  padding: 5vw 0;
  @media (min-width: 600px) {
    padding: 30px 0;
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

const MemberProfileImageStyle = styled.img`
  width: 20vw;
  height: 20vw;
  border-radius: ${({ theme }) => theme.borderRadius.default};

  @media (min-width: 600px) {
    width: 120px;
    height: 120px;
  }
`;

const MemberProfileDetailStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 20vw;
  padding-left: 0;

  @media (min-width: 600px) {
    width: 180px;
    height: 120px;
    padding-left: 10px;
  }

  .name {
    font-weight: bold;
    font-size: 3vw;
    margin: 0.8vw 0;
    @media (min-width: 600px) {
      font-size: 20px;
      margin: 5px 0;
    }
  }

  .date {
    font-size: 2vw;
    margin: 0.8vw 0;
    @media (min-width: 600px) {
      font-size: 12px;
      margin: 5px 0;
    }
  }
`;

const MemberProfileButtonStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 30vw;
  height: 20vw;

  @media (min-width: 600px) {
    width: 180px;
    height: 120px;
  }
`;

const MemberTagsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  height: 100%;
  align-items: end;
`;

const MemberTagStyle = styled.div<{ color: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  width: auto;
  background-color: ${({ theme, color }) => theme.color[color]};
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 2vw;
  height: 4vw;

  @media (min-width: 600px) {
    font-size: 12px;
    height: 24px;
  }
`;

const ChatButtontyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8vw;
  font-size: 2.5vw;
  background-color: #252932;
  border-radius: 10px;
  cursor: pointer;

  svg {
    margin-left: 5px;
  }

  @media (min-width: 600px) {
    height: 50px;
    font-size: 16px;
    border-radius: ${({ theme }) => theme.borderRadius.default};
  }
`;

const RoutineButtontyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8vw;
  font-size: 2.5vw;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 10px;
  cursor: pointer;

  svg {
    margin-left: 5px;
  }

  @media (min-width: 600px) {
    height: 50px;
    font-size: 16px;
    border-radius: ${({ theme }) => theme.borderRadius.default};
  }
`;

export default MemberProfile;
