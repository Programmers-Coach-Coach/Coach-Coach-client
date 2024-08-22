import { useEffect, useRef } from "react";
import styled from "styled-components";
import CustomButton from "../common/Button/CustomButton";
import { TextField, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import useFetchProfile from "@/hooks/queries/useFetchUserProfile";
import SelectBox from "../common/InputField/Select/SelectBox";
import { FaCirclePlus } from "react-icons/fa6";
import toast from "react-hot-toast";
import { IMyPageFormValues } from "@/models/auth.model";
import { getGenderLabel } from "@/utils/genderUtils";
import Loading from "../loading/Loading";
import AddressSearchField from "./AddressSearchField";
import useAuth from "@/hooks/useAuth";
import image from "@/assets/images/basicProfile.png";

const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const ProfileSection = () => {
  const { profile, isFetchError, isLoading } = useFetchProfile();
  const { withdrawUser, editUserProfile } = useAuth();
  const { control, handleSubmit, setValue, watch } = useForm<IMyPageFormValues>(
    {
      defaultValues: {
        nickname: "",
        profileImageUrl: "",
        localAddress: "",
        localAddressDetail: "",
        interestedSports: [],
        introduction: "",
        gender: ""
      }
    }
  );

  const inputRef = useRef<HTMLInputElement>(null);

  const profileImage = watch("profileImageUrl");

  useEffect(() => {
    if (profile) {
      setValue("nickname", profile.nickname || "");
      setValue("profileImageUrl", profile.profileImageUrl || image);
      setValue("localAddress", profile.localAddress || "");
      setValue("localAddressDetail", profile.localAddressDetail || "");
      const sportsNames = profile.interestedSports.map(
        (sport) => sport.sportName
      );
      setValue("interestedSports", sportsNames);
      setValue("introduction", profile.introduction || "");
      setValue("gender", getGenderLabel(profile.gender));
    }
  }, [profile, setValue]);

  const onSubmit = async (data: IMyPageFormValues) => {
    const formData = new FormData();

    if (inputRef.current?.files?.[0]) {
      formData.append("profileImage", inputRef.current.files[0]);
    }

    const formattedSports = data.interestedSports.map((sport) => ({
      sportName: sport
    }));

    const userProfileRequest = {
      nickname: data.nickname,
      localAddress: data.localAddress,
      localAddressDetail: data.localAddressDetail,
      interestedSports: formattedSports,
      introduction: data.introduction,
      gender: data.gender === "남성" ? "M" : "W"
    };

    formData.append("userProfileRequest", JSON.stringify(userProfileRequest));
    console.log(JSON.stringify(userProfileRequest));
    editUserProfile(formData);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (!allowedExtensions.includes(fileExtension || "")) {
        toast.error("허용되지 않는 파일 형식입니다.");
        return;
      }

      if (file.size > MAX_FILE_SIZE) {
        toast.error("파일 크기는 5MB를 초과할 수 없습니다.");
        return;
      }

      setValue("profileImageUrl", file);
    }
  };

  const getProfileImageUrl = () => {
    if (profileImage instanceof File) {
      return URL.createObjectURL(profileImage);
    }
    return profileImage || ""; // 기본 이미지 URL이나 빈 문자열로 대체
  };

  if (isLoading) return <Loading />;
  if (isFetchError || !profile) {
    console.log(isFetchError);
    return <div>프로필 정보를 가져오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <ProfileWrapper>
      <ProfileImageWrapper>
        <ProfileImage src={getProfileImageUrl()} alt="Profile" />
        <IconWrapper onClick={() => inputRef.current?.click()} />
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </ProfileImageWrapper>
      <InfoWrapper>
        <BasicWrapper>
          <SubtitleWrapper>이름</SubtitleWrapper>
          <Controller
            name="nickname"
            control={control}
            render={({ field }) => (
              <TextField
                maxRows={1}
                minRows={1}
                {...field}
                label="닉네임"
                value={field.value || ""} // null일 경우 빈 문자열로 처리
              />
            )}
          />
        </BasicWrapper>
        <BasicWrapper>
          <SubtitleWrapper>성별</SubtitleWrapper>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <RadioGroup
                row
                {...field}
                onChange={(e) => field.onChange(e.target.value)}
                value={field.value || ""} // null일 경우 빈 문자열로 처리
              >
                <FormControlLabel
                  value="남성"
                  control={<Radio />}
                  label="남성"
                />
                <FormControlLabel
                  value="여성"
                  control={<Radio />}
                  label="여성"
                />
              </RadioGroup>
            )}
          />
        </BasicWrapper>
        <BasicWrapper>
          <SubtitleWrapper>관심 종목</SubtitleWrapper>
          <Controller
            name="interestedSports"
            control={control}
            render={({ field }) => (
              <SelectBox
                value={field.value || []} // null일 경우 빈 배열로 처리
                onChange={(event) =>
                  field.onChange(event.target.value as string[])
                }
              />
            )}
          />
        </BasicWrapper>

        <Controller
          name="localAddress"
          control={control}
          render={({ field }) => (
            <AddressSearchField
              label="지역"
              value={field.value || ""} // null일 경우 빈 문자열로 처리
              onAddressSelect={(address) => field.onChange(address)}
            />
          )}
        />
        <Controller
          name="localAddressDetail"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              maxRows={1}
              minRows={1}
              value={field.value || ""}
            />
          )}
        />

        <SubtitleWrapper>자기소개</SubtitleWrapper>
        <Controller
          name="introduction"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              multiline
              minRows={3}
              maxRows={3}
              value={field.value || ""}
            />
          )}
        />

        <CustomButton
          size="full"
          variant="contained"
          onClick={handleSubmit(onSubmit)}
        >
          수정하기
        </CustomButton>
        <DeleteUserWrapper>
          <span className="login" onClick={withdrawUser}>
            회원탈퇴
          </span>
        </DeleteUserWrapper>
      </InfoWrapper>
    </ProfileWrapper>
  );
};

const ProfileImageWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto 10px;
  width: ${({ theme }) => theme.profileImage.small.width};
  height: ${({ theme }) => theme.profileImage.small.height};
`;

const IconWrapper = styled(FaCirclePlus)`
  position: absolute;
  bottom: -5px;
  right: -5px;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 50%;
  padding: 2px;
  color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  object-fit: cover;
`;

const BasicWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DeleteUserWrapper = styled.div`
  span {
    cursor: pointer;
  }
  text-align: center;
  color: ${({ theme }) => theme.color.primary};
`;

const SubtitleWrapper = styled.div`
  font-size: ${({ theme }) => theme.titleSize.t2.fontSize};
  font-weight: ${({ theme }) => theme.titleSize.t2.bold};
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 0 80px 0;
  margin-top: 20px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`;

export default ProfileSection;
