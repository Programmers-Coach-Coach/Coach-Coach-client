import useFetchCoachProfile from "@/hooks/queries/useFetchCoachProfile";
import { IMyPageCoachFormValues } from "@/models/coach.model";
import { getGenderLabel } from "@/utils/genderUtils";
import { Switch, TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import CustomButton from "../common/Button/CustomButton";
import ReviewCard from "../common/Card/ReviewCard.tsx/ReviewCard";
import SelectBox from "../common/InputField/Select/SelectBox";
import Loading from "../loading/Loading";
import AddressSearchField from "./AddressSearchField";
interface CoachProfileSectionProps {
  onTabChange: (newValue: number) => void;
}

const CoachProfileSection = ({ onTabChange }: CoachProfileSectionProps) => {
  const { coachProfile, isFetchError, isLoading } = useFetchCoachProfile();
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
    if (coachProfile) {
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
  }, [coachProfile, setValue]);

  const onSubmit = (data: IMyPageCoachFormValues) => {
    //수정 API 호출 부분
    console.log(data);
  };

  const handleCancel = () => {
    onTabChange(0);
  };

  if (isLoading) return <Loading />;
  if (isFetchError || !coachProfile)
    return <div>프로필 정보를 가져오는 중 오류가 발생했습니다.</div>;

  return (
    <ProfileWrapper>
      <BasicInfoWrapper>
        <ProfileImage
          src={
            "https://cdn3.iconfinder.com/data/icons/basic-ui-element-s94-3/64/Basic_UI_Icon_Pack_-_Glyph_user-1024.png"
          }
          alt="Profile"
        />
        <NameGenderWrapper className="b1">
          <NameWrapper>
            <SubtitleWrapper>성함</SubtitleWrapper>
            <div>{coachProfile.coachName}</div>
          </NameWrapper>
          <GenderWrapper>
            <SubtitleWrapper>성별</SubtitleWrapper>
            <div>{getGenderLabel(coachProfile.coachGender)}</div>
          </GenderWrapper>
        </NameGenderWrapper>
      </BasicInfoWrapper>

      <InfoWrapper>
        <BasicWrapper>
          <SubtitleWrapper>코칭 종목</SubtitleWrapper>
          <Controller
            name="coachingSports"
            control={control}
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
          render={({ field }) => (
            <TextField {...field} multiline minRows={3} maxRows={3} />
          )}
        />
        <Controller
          name="activeCenter"
          control={control}
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
          render={({ field }) => <TextField {...field} maxRows={1} />}
        />

        <SubtitleWrapper>문의 가능 시간</SubtitleWrapper>
        <Controller
          name="activeHours"
          control={control}
          render={({ field }) => <TextField {...field} maxRows={1} />}
        />

        <SubtitleWrapper>오픈 카카오톡 링크</SubtitleWrapper>
        <Controller
          name="chattingUrl"
          control={control}
          render={({ field }) => <TextField {...field} maxRows={1} />}
        />
        <SubtitleWrapper>리뷰</SubtitleWrapper>
        <ReviewCard coachProfile={coachProfile} />

        <Controller
          name="isOpen"
          control={control}
          render={({ field }) => (
            <BasicWrapper>
              <SubtitleWrapper>
                정보 공개 선택 (목록에 노출하기)
              </SubtitleWrapper>
              <Switch {...field} />
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
            onClick={handleSubmit(onSubmit)}
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
