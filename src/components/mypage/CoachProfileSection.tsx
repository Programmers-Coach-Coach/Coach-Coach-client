import profilePath from "@/assets/images/profile.png";
import useFetchCoachProfile from "@/hooks/queries/useFetchCoachProfile";
import useAuth from "@/hooks/useAuth";
import { useFetchAuth } from "@/hooks/useFetchAuth";
import { IMyPageCoachFormValues } from "@/models/coach.model";
import { getGenderLabel } from "@/utils/genderUtils";
import { Switch, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, FieldErrors, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import styled from "styled-components";
import CustomButton from "../common/Button/CustomButton";
import CoachProfileReview from "../common/Card/ReviewCard.tsx/CoachProfileReview";
import Loading from "../loading/Loading";
import AddressSearchField from "./AddressSearchField";
import { AUTH_REGEX } from "@/constants/regex";
import useModal from "@/hooks/useModal";
import Modal from "@/components/common/modal/Modal";
import HorizontalLine from "../common/HorizontalLine/HorizontalLine";
import SportSelectBox from "../common/InputField/Select/SportSelectBox";
import CommonInput from "../common/InputField/Text/CommonInput";

const CoachProfileSection = () => {
  const { data: userMeData, refetch: authRefetch } = useFetchAuth();
  const { editUserCoachProfile } = useAuth();
  const [shouldFetchCoachProfile, setShouldFetchCoachProfile] = useState(false);
  const { isModal, openModal, closeModal } = useModal();

  // 시작 시간과 종료 시간 상태
  const [startTime, setStartTime] = useState<string>("10:00");
  const [endTime, setEndTime] = useState<string>("18:00");

  useEffect(() => {
    if (userMeData?.isCoach !== undefined) {
      if (userMeData?.isCoach) {
        setShouldFetchCoachProfile(true);
      } else {
        openModal();
      }
    }
  }, [userMeData, openModal]);

  const { coachProfile, isLoading, isFetchError } = useFetchCoachProfile(
    shouldFetchCoachProfile
  );

  const { control, handleSubmit, setValue } = useForm<IMyPageCoachFormValues>({
    defaultValues: {
      coachIntroduction: "",
      activeCenter: "",
      activeCenterDetail: "",
      coachingSports: [],
      activeHours: "",
      chattingUrl: "",
      isOpen: true
    }
  });

  useEffect(() => {
    authRefetch().then(() => {
      if (userMeData?.isCoach && coachProfile) {
        setValue(
          "coachingSports",
          coachProfile.coachingSports.map((sport) => sport.sportName)
        );
        setValue("activeCenter", coachProfile.activeCenter || "");
        setValue("activeCenterDetail", coachProfile.activeCenterDetail || "");
        setValue("coachIntroduction", coachProfile.coachIntroduction);
        setValue("activeHours", coachProfile.activeHours);
        setValue("chattingUrl", coachProfile.chattingUrl);
        setValue("isOpen", coachProfile.isOpen);
      }
    });
  }, [coachProfile, setValue, authRefetch, userMeData]);

  const onSubmit = (data: IMyPageCoachFormValues) => {
    if (startTime >= endTime) {
      toast.error("시작 시간은 종료 시간보다 앞서야 합니다.");
      return;
    }

    const formattedSports = data.coachingSports.map((sport) => ({
      sportName: sport
    }));

    // 시작 시간과 종료 시간을 결합한 문자열
    const formattedActiveHours = `${startTime} ~ ${endTime}`;

    const userCoachProfileRequest = {
      coachingSports: formattedSports,
      coachIntroduction: data.coachIntroduction,
      activeCenter: data.activeCenter,
      activeCenterDetail: data.activeCenterDetail,
      activeHours: formattedActiveHours, // 문의 가능 시간을 "시작 시간 ~ 종료 시간" 형식으로 저장
      chattingUrl: data.chattingUrl,
      isOpen: data.isOpen
    };
    editUserCoachProfile(userCoachProfileRequest);
  };

  const onInvalid = (errors: FieldErrors<IMyPageCoachFormValues>) => {
    if (errors.chattingUrl?.message) {
      toast.error(errors.chattingUrl.message);
    } else {
      toast.error("입력 폼을 모두 채워주세요.");
    }
  };

  if (isLoading) return <Loading />;
  if (isFetchError)
    return <div>프로필 정보를 가져오는 중 오류가 발생했습니다.</div>;

  return (
    <ProfileWrapper>
      {isModal && (
        <Modal closeModal={closeModal} position="center" overlayDisabled={true}>
          <DescWrapper>
            <SubtitleWrapper>코치로 전환하고 싶으신가요?</SubtitleWrapper>
            <div>코치로 등록하기 위해서는 아래 단계를 따라주세요</div>
            <div>1. 모든 필드를 채워주세요.</div>
            <div>2. 아래 수정하기 버튼을 클릭하세요.</div>
            <ConfirmBtnWrapper>
              <CustomButton
                size="mini"
                variant="contained"
                onClick={closeModal}
              >
                확인
              </CustomButton>
            </ConfirmBtnWrapper>
          </DescWrapper>
        </Modal>
      )}

      <ProfileImageWrapper>
        <ProfileImage
          src={userMeData?.profileImageUrl || profilePath}
          alt="Profile"
        />
      </ProfileImageWrapper>
      <HorizontalLine />

      <InfoWrapper>
        <NameWrapper>
          <SubtitleWrapper>닉네임</SubtitleWrapper>
          <TmpWrapper>{userMeData?.nickname}</TmpWrapper>
        </NameWrapper>
        <GenderWrapper>
          <SubtitleWrapper>성별</SubtitleWrapper>
          <TmpWrapper>{getGenderLabel(userMeData?.gender)}</TmpWrapper>
        </GenderWrapper>
        <BasicWrapper>
          <SubtitleWrapper>코칭 종목</SubtitleWrapper>
          <Controller
            name="coachingSports"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <SportSelectBox
                value={field.value}
                onChange={(event) =>
                  field.onChange(event.target.value as string[])
                }
              />
            )}
          />
        </BasicWrapper>
        <AddrressWrapper>
          <SubtitleWrapper>시설 주소 (선택)</SubtitleWrapper>
          <Controller
            name="activeCenter"
            control={control}
            render={({ field }) => (
              <AddressSearchField
                type="center"
                value={field.value}
                onAddressSelect={(address) => field.onChange(address)}
                inputWidth="100%"
              />
            )}
          />
          <Controller
            name="activeCenterDetail"
            control={control}
            render={({ field }) => (
              <CommonInput
                {...field}
                inputHeight="40px"
                type="text"
                placeholder="상세 주소"
              />
            )}
          />
        </AddrressWrapper>

        <AddrressWrapper>
          <SubtitleWrapper>문의 가능 시간</SubtitleWrapper>
          <TimeInputGroupWrapper>
            <TimeInputWrapper
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
            <div>~</div>
            <TimeInputWrapper
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </TimeInputGroupWrapper>
        </AddrressWrapper>

        <AddrressWrapper>
          <SubtitleWrapper>오픈 카카오톡 링크</SubtitleWrapper>
          <Controller
            name="chattingUrl"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: AUTH_REGEX.kakaoOpenChat,
                message: "올바른 카카오톡 링크를 적어주세요."
              }
            }}
            render={({ field }) => (
              <CommonInput
                {...field}
                inputHeight="40px"
                type="text"
                placeholder="오픈 카카오톡 링크"
              />
            )}
          />
        </AddrressWrapper>
        <AddrressWrapper>
          <SubtitleWrapper>자기소개</SubtitleWrapper>
          <Controller
            name="coachIntroduction"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                multiline
                minRows={3}
                maxRows={3}
                value={field.value || ""}
                sx={{
                  "&": {
                    backgroundColor: "#252932",
                    borderRadius: "10px"
                  },
                  "& .MuiInputBase-input": {
                    color: "#777c89"
                  }
                }}
              />
            )}
          />
        </AddrressWrapper>

        {userMeData?.isCoach && coachProfile && (
          <>
            <SubtitleWrapper>리뷰</SubtitleWrapper>
            <CoachProfileReview coachProfile={coachProfile} />
          </>
        )}
        <Controller
          name="isOpen"
          control={control}
          render={({ field }) => (
            <BasicWrapper>
              <SubtitleWrapper>
                정보 공개 선택 (목록에 노출하기)
              </SubtitleWrapper>
              <Switch checked={field.value} onChange={field.onChange} />
            </BasicWrapper>
          )}
        />
        <ButtonsWrapper>
          <CustomButton
            size="full"
            variant="contained"
            onClick={handleSubmit(onSubmit, onInvalid)}
          >
            수정하기
          </CustomButton>
        </ButtonsWrapper>
      </InfoWrapper>
    </ProfileWrapper>
  );
};

// 스타일 컴포넌트
const TimeInputGroupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TimeInputWrapper = styled.input`
  width: 45%;
  height: 36px;
  border: none;
  border-radius: 10px;
  background-color: #252932;
  color: #777c89;
  padding: 16px;
  font-size: 14px;

  /* WebKit 기반 브라우저에서 시계 아이콘 스타일 변경 */
  &::-webkit-calendar-picker-indicator {
    filter: invert(50%) sepia(20%) saturate(200%) hue-rotate(180deg)
      brightness(90%);
  }
`;
const AddrressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TmpWrapper = styled.div`
  width: 69%;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto 10px;
  width: 120px;
  height: 120px;
  padding: 4px;
  background: linear-gradient(135deg, #00aaff, #a740ff);
  border-radius: 50%;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 50%;
  object-fit: cover;
  background: ${({ theme }) => theme.color.gray1};
`;

const ConfirmBtnWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: black;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const BasicWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SubtitleWrapper = styled.div`
  font-size: ${({ theme }) => theme.titleSize.t2.fontSize};
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 10px 80px 10px;
  margin-top: 20px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin-top: 20px;
`;

const GenderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default CoachProfileSection;
