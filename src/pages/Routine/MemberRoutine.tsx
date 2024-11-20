import Progress from "@/components/common/InputField/Progress/Progress";
import AddModal from "@/components/common/modal/AddModal";
import DraggableIcon from "@/components/Icon/DraggableIcon";
import IconButton from "@/components/Icon/IconButton";
import SvgIcon from "@/components/Icon/SvgIcon";
import Loading from "@/components/loading/Loading";
import SliderProfileList from "@/components/Profile/ProfileList/SliderProfileList";
import RoutineList from "@/components/routine/RoutineList";
import { useGetRoutines } from "@/hooks/queries/useRoutine";
import { useFetchAuth } from "@/hooks/useFetchAuth";
import { useMatchMember } from "@/hooks/useMember";
import useResponsiveIconSize from "@/hooks/useResponsiveIconSize";
import { isNewRoutine } from "@/store/isNewRoutine.store";
import { useProfileInfo } from "@/store/profileInfo.store";
import { useRoutineStore } from "@/store/routine.store";
import { WhiteSpace } from "@/style/global";
import { Sports } from "@/style/theme";
import { formatCurrentDate } from "@/utils/formatDate";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { styled } from "styled-components";

const MemberRoutine = () => {
  const { data: authData, isLoading: authLoading, refetch } = useFetchAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false); // 드래그 상태 추가
  const [isCoach, setIsCoach] = useState(false);
  const resetRoutine = useRoutineStore((set) => set.resetRoutine);
  const setIsNewRoutine = isNewRoutine((set) => set.setIsNewRoutine);
  const setUserId = useProfileInfo((set) => set.setUserId);
  const userId = useProfileInfo((state) => state.userId);
  const iconSize = useResponsiveIconSize("3vw", "16px", 600);
  const memberRoutineResponse = useGetRoutines({ userId });
  const { data = [], isLoading: memberLoading } = useMatchMember(isCoach);

  useEffect(() => {
    refetch().then(() => {
      setIsCoach(authData?.isCoach || false);
    });
  }, [authData, refetch]);

  if (authLoading || memberLoading) return <Loading />;

  if (memberRoutineResponse.isLoading) return <div>로딩 중...</div>;
  if (memberRoutineResponse.isError || !memberRoutineResponse.data)
    return <div>무언가 잘못됨</div>;

  const matchData = data.filter((d) => d.isMatching === true);
  const memberData = matchData.find((d) => d.userId === userId);

  const startTrainingDate = `${memberData?.startDate.slice(0, 4)}. ${memberData?.startDate.slice(5, 7)}. ${memberData?.startDate.slice(8, 10)}.`;

  const currentDate = formatCurrentDate();

  // 드래그 중이 아닐 때만 openHandler 실행
  const openHandler = () => {
    if (memberData === undefined) {
      toast.error("유저 정보를 찾을 수 없습니다.");
    } else if (!isDragging) {
      setIsOpen(!isOpen);
      setIsNewRoutine(true);
      resetRoutine();
      setUserId(memberData.userId);
    }
  };

  return (
    <>
      {isOpen && <BlurStyle />}
      <MemberRoutineStyle>
        <div className="title">내 회원</div>
        <SliderProfileList data={matchData} />
        <Wrap>
          <MemberDescriptionStyle>
            <MemberTagsStyle>
              {memberData?.interestedSports?.map((sport) => {
                return (
                  <MemberTagStyle
                    key={sport.sportId}
                    $id={sport.sportId as Sports}
                  >
                    #{sport.sportName}
                  </MemberTagStyle>
                );
              })}
            </MemberTagsStyle>
            <div className="date">트레이닝 시작일 : {startTrainingDate}</div>
          </MemberDescriptionStyle>
          <ChatButtontyle>
            <div className="chat">채팅하기</div>
            <IconButton name="chat" size={iconSize} color="text" />
          </ChatButtontyle>
        </Wrap>
        <RoutineTextStyle>
          <h1>오늘의 루틴</h1>
          <p className="b3">{currentDate}</p>
        </RoutineTextStyle>
        <Progress value={memberRoutineResponse.data.completionPercentage} />
        <RoutineList
          routines={memberRoutineResponse.data.routines}
          isCheck={false}
        />
        <WhiteSpace $height={80} />
        <DraggableIcon isDraggingFn={setIsDragging}>
          {isOpen ? (
            <AddModal openHandler={openHandler} />
          ) : (
            <SvgIcon
              name="addRoutine"
              width="60px"
              height="60px"
              fill="primary"
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

const MemberTagStyle = styled.div<{ $id: Sports }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  background-color: ${({ theme, $id }) => theme.sports[$id]};
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
export default MemberRoutine;
