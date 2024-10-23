import Progress from "@/components/common/InputField/Progress/Progress";
import RoutineList from "@/components/routine/RoutineList";
import { useProfileInfo } from "@/store/profileInfo.store";
import { WhiteSpace } from "@/style/global";
import { formatCurrentDate } from "@/utils/formatDate";
import { styled } from "styled-components";
import profile from "@/assets/images/profile.png";
import IconButton from "@/components/Icon/IconButton";
import useResponsiveIconSize from "@/hooks/useResponsiveIconSize";
import { useGetRoutines } from "@/hooks/queries/useRoutine";

const CoachRoutine = () => {
  // const coachId = useProfileInfo((state) => state.coachId);
  const coachName = useProfileInfo((state) => state.profileName);
  const profileImageUrl = useProfileInfo((state) => state.profileImageUrl);

  const iconSize = useResponsiveIconSize("14px", "20px", 600);

  const { data, isLoading, isError } = useGetRoutines();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>무언가 잘못됨</div>;

  const currentDate = formatCurrentDate();
  const coachImage = profileImageUrl ? profileImageUrl : profile;

  return (
    <RoutineStyle>
      <RoutineTextStyle>
        <h1>오늘의 내 코치 루틴</h1>
        <p className="b3">{currentDate}</p>
      </RoutineTextStyle>
      <Progress value={data.completionPercentage} />
      <CoachProfileStyle>
        <CoachProfileImageStyle src={coachImage} alt={coachName} />
        <CoachDescriptionStyle>
          <p className="name">{coachName}</p>
          <ChatCardStyle>
            <p>채팅하기</p>
            <IconButton name="chat" size={iconSize} color="text" />
          </ChatCardStyle>
        </CoachDescriptionStyle>
        <SpeechBubble>
          내가 직접 그린 말풍선... 넘어가면 어떻게 되나..
        </SpeechBubble>
      </CoachProfileStyle>
      <RoutineList routines={data.routines} isModify={false} />
      <WhiteSpace $height={80} />
    </RoutineStyle>
  );
};

const RoutineStyle = styled.div`
  margin-top: 1vh;
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

const CoachProfileStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5vh;
  max-width: 600px;

  p {
    margin: 0.1rem 0;
  }
`;

const CoachProfileImageStyle = styled.img`
  width: 20vw;
  height: 20vw;
  border-radius: ${({ theme }) => theme.borderRadius.default};

  @media (min-width: 600px) {
    width: 120px;
    height: 120px;
  }
`;

const CoachDescriptionStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .name {
    font-size: 4vw;
    font-weight: bold;

    @media (min-width: 600px) {
      font-size: 20px;
    }
  }
`;

const ChatCardStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1vh;
  width: 20vw;
  height: 8vw;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  p {
    font-size: 3vw;
  }

  svg {
    margin-left: 2px;
  }

  @media (min-width: 600px) {
    width: 100px;
    height: 40px;
    p {
      font-size: 16px;
    }
  }
`;

const SpeechBubble = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgba(0, 117, 255, 0.5);
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 1vh 1vw;
  width: 30vw;
  height: 20vw;
  font-size: 3vw;

  @media (min-width: 600px) {
    padding: 16px 24px;
    width: 200px;
    height: 120px;
    font-size: 16px;
  }

  /* 말풍선 꼬리 - before 사용 */
  &::before {
    content: "";
    position: absolute;
    top: 30%;
    left: -5vw;
    transform: translateY(-50%);
    border-style: solid;
    border-color: transparent rgba(0, 117, 255, 0.5);
    border-width: 10px 5vw 10px 0;

    @media (min-width: 600px) {
      left: -35px;
      border-width: 10px 35px 10px 0;
    }
  }
`;

export default CoachRoutine;
