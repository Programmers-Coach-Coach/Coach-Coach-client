import useFetchCoachProfile from "@/hooks/queries/useFetchCoachProfile";
import { IMyPageCoachFormValues } from "@/models/coach.model";
import { getGenderLabel } from "@/utils/genderUtils";
import { Switch, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import CustomButton from "../common/Button/CustomButton";
import SelectBox from "../common/InputField/Select/SelectBox";
import Loading from "../loading/Loading";
import AddressSearchField from "./AddressSearchField";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";
import image from "@/assets/images/basicProfile.png";
import CoachProfileReview from "../common/Card/ReviewCard.tsx/CoachProfileReview";
import { useFetchAuth } from "@/hooks/useFetchAuth";

interface CoachProfileSectionProps {
  onTabChange: (newValue: number) => void;
}

const CoachProfileSection = ({ onTabChange }: CoachProfileSectionProps) => {
  const { data, refetch } = useFetchAuth();
  const { editUserCoachProfile } = useAuth();

  const { coachProfile, isLoading, isFetchError } = useFetchCoachProfile(
    data?.isCoach || false
  );
  const { control, handleSubmit, setValue } = useForm<IMyPageCoachFormValues>({
    defaultValues: {
      coachIntroduction: "",
      activeCenter: "",
      activeCenterDetail: "",
      coachingSports: [],
      activeHours: "",
      chattingUrl: "",
      isOpen: false
    }
  });

  useEffect(() => {
    refetch().then(() => {
      if (data?.isCoach && coachProfile) {
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
      console.log(data);
    });
  }, [coachProfile, setValue, refetch, data]);

  const onSubmit = (data: IMyPageCoachFormValues) => {
    const formattedSports = data.coachingSports.map((sport) => ({
      sportName: sport
    }));
    const userCoachProfileRequest = {
      coachingSports: formattedSports,
      coachIntroduction: data.coachIntroduction,
      activeCenter: data.activeCenter,
      activeCenterDetail: data.activeCenterDetail,
      activeHours: data.activeHours,
      chattingUrl: data.chattingUrl,
      isOpen: data.isOpen
    };
    editUserCoachProfile(userCoachProfileRequest);
  };

  const handleCancel = () => {
    onTabChange(0);
  };
  const onInvalid = () => {
    toast.error("입력 폼을 모두 채워주세요.");
  };
  if (isLoading) return <Loading />;
  if (isFetchError)
    return <div>프로필 정보를 가져오는 중 오류가 발생했습니다.</div>;

  return (
    <ProfileWrapper>
      <BasicInfoWrapper>
        <ProfileImage src={data?.profileImageUrl || image} alt="Profile" />
        <NameGenderWrapper className="b1">
          <NameWrapper>
            <SubtitleWrapper>성함</SubtitleWrapper>
            <div>{data?.nickname}</div>
          </NameWrapper>
          <GenderWrapper>
            <SubtitleWrapper>성별</SubtitleWrapper>
            <div>{getGenderLabel(data?.gender)}</div>
          </GenderWrapper>
        </NameGenderWrapper>
      </BasicInfoWrapper>

      <InfoWrapper>
        <BasicWrapper>
          <SubtitleWrapper>코칭 종목</SubtitleWrapper>
          <Controller
            name="coachingSports"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <SelectBox
                value={field.value}
                onChange={(event) =>
                  field.onChange(event.target.value as string[])
                }
              />
            )}
          />
        </BasicWrapper>
        <SubtitleWrapper>자기소개</SubtitleWrapper>
        <Controller
          name="coachIntroduction"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField {...field} multiline minRows={3} maxRows={3} />
          )}
        />
        <Controller
          name="activeCenter"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <AddressSearchField
              label="활동중인 센터"
              value={field.value}
              onAddressSelect={(address) => field.onChange(address)}
            />
          )}
        />
        <Controller
          name="activeCenterDetail"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField {...field} maxRows={1} />}
        />

        <SubtitleWrapper>문의 가능 시간</SubtitleWrapper>
        <Controller
          name="activeHours"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField {...field} maxRows={1} />}
        />

        <SubtitleWrapper>오픈 카카오톡 링크</SubtitleWrapper>
        <Controller
          name="chattingUrl"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <TextField {...field} maxRows={1} />}
        />
        {data?.isCoach && coachProfile && (
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
            variant="outlined"
            type="button"
            onClick={handleCancel}
          >
            취소
          </CustomButton>
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

const NameGenderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 70%;
`;

const SubtitleWrapper = styled.div`
  font-size: ${({ theme }) => theme.titleSize.t2.fontSize};
  font-weight: ${({ theme }) => theme.titleSize.t2.bold};
`;

const BasicInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 0 80px 0;
  margin-top: 20px;
`;

const ProfileImage = styled.img`
  width: ${({ theme }) => theme.profileImage.mini.width};
  height: ${({ theme }) => theme.profileImage.mini.height};
  border-radius: 50%;
  object-fit: cover;
`;

const NameWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`;

const GenderWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export default CoachProfileSection;
