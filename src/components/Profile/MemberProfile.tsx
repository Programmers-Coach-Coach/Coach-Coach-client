import { styled } from "styled-components";
import profile from "@/assets/images/profile.png";
import IconButton from "../Icon/IconButton";
import useResponsiveIconSize from "@/hooks/useResponsiveIconSize";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SvgIcon from "../Icon/SvgIcon";
import { IGetMyMember } from "@/models/member.model";
import useModal from "@/hooks/useModal";
import Modal from "../common/modal/Modal";
import TwoButtonContent from "../common/modal/contents/TwoButtonContent";
import { useDeleteMember, usePatchMember } from "@/hooks/useMember";
import { useProfileInfo } from "@/store/profileInfo.store";
import { Sports } from "@/style/theme";
import { formatTimeDifference } from "@/utils/formatDate";

interface MemberProfileProps {
  member: IGetMyMember;
}

const MemberProfile = ({ member }: MemberProfileProps) => {
  const imageUrl = member.profileImageUrl ? member.profileImageUrl : profile;
  const iconSize = useResponsiveIconSize("3.5vw", "24px", 600);
  const [isSet, setIsSet] = useState(false);
  const navigate = useNavigate();
  const setUserId = useProfileInfo((state) => state.setUserId);
  const inquiryModal = useModal();
  const patchMemberRequest = usePatchMember();
  const deleteMemberRequest = useDeleteMember();

  const dumbbellClickHandler = () => {
    if (member.isMatching) {
      setUserId(member.userId);
      setIsSet(true);
    }
  };

  useEffect(() => {
    if (isSet) {
      navigate("/member/routine");
    }
  }, [isSet, navigate]);

  const startTrainingDate = `${member.startDate.slice(0, 4)}. ${member.startDate.slice(5, 7)}. ${member.startDate.slice(8, 10)}.`;
  const startMatchDate = `${member.startDate.slice(0, 4)}년 ${member.startDate.slice(5, 7)}월 ${member.startDate.slice(8, 10)}일 | ${member.startDate.slice(11, 16)}`;

  const timeAlarm = formatTimeDifference(member.startDate);

  return (
    <>
      {inquiryModal.isModal && (
        <Modal closeModal={inquiryModal.closeModal} position="footer-above">
          <TwoButtonContent
            title={member.userName}
            description="매칭을 수락하시겠어요?"
            cancelButtonText="거절하기"
            onCancel={() => {
              deleteMemberRequest.mutate(member.userId);
              inquiryModal.closeModal();
            }}
            ConfirmButtonText="수락하기"
            onConfirm={() => {
              patchMemberRequest.mutate(member.userId);
              inquiryModal.closeModal();
            }}
          />
        </Modal>
      )}
      <MemberProfileStyle>
        <MemberProfileImageStyle src={imageUrl} alt="profile" />
        <MemberProfileDetailStyle>
          <MemberNameStyle>
            <div className="name">{member.userName}</div>
            {!member.isMatching && <div className="time">{timeAlarm}</div>}
          </MemberNameStyle>
          <MemberTagsStyle>
            {member.interestedSports?.map((sport) => {
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
          <div className="date">
            {member.isMatching
              ? `트레이닝 시작일 : ${startTrainingDate}`
              : startMatchDate}
          </div>
        </MemberProfileDetailStyle>
        <MemberProfileButtonStyle>
          <ChatButtontyle>
            <div className="chat">채팅하기</div>
            <IconButton name="chat" size={iconSize} color="text" />
          </ChatButtontyle>
          <RoutineButtontyle
            onClick={
              member.isMatching
                ? dumbbellClickHandler
                : () => {
                    inquiryModal.openModal();
                  }
            }
          >
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
    </>
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

  .time {
    font-size: 1.6vw;
    margin: 1.5vw 0 0.8vw 1.6vw;
    @media (min-width: 600px) {
      font-size: 13px;
      margin: 9px 0 5px 10px;
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

const MemberNameStyle = styled.div`
  display: flex;
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

const MemberTagStyle = styled.div<{ $id: Sports }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  width: auto;
  background-color: ${({ theme, $id }) => theme.sports[$id]};
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
