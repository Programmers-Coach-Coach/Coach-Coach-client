import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import CustomButton from "../common/Button/CustomButton";
import { TextField, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import DaumPostcode, { Address } from "react-daum-postcode";
import { useForm, Controller } from "react-hook-form";
import useFetchProfile from "@/hooks/queries/useFetchUserProfile";
import SelectBox from "../common/InputField/Select/SelectBox";
import { FaCirclePlus } from "react-icons/fa6";
import toast from "react-hot-toast";
import { IMyPageFormValues } from "@/models/auth.model";

const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const ProfileSection = () => {
  const { profile, isFetchError, isLoading } = useFetchProfile();
  const { control, handleSubmit, setValue, watch } = useForm<IMyPageFormValues>(
    {
      defaultValues: {
        nickname: "",
        profileImageUrl: "",
        address: "",
        addressDetail: "",
        interestedSports: [],
        introduction: "",
        gender: ""
      }
    }
  );

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const profileImage = watch("profileImageUrl");

  useEffect(() => {
    if (profile) {
      setValue("nickname", profile.nickname);
      setValue("profileImageUrl", profile.profileImageUrl);
      setValue("address", profile.address);
      setValue("addressDetail", profile.addressDetail || "");
      setValue("interestedSports", profile.interestedSports);
      setValue("introduction", profile.introduction);
      setValue("gender", profile.gender === "M" ? "남성" : "여성");
    }
  }, [profile, setValue]);

  const onSubmit = (data: IMyPageFormValues) => {
    const gender = data.gender === "남성" ? "M" : "W";
    const formData = { ...data, gender };
    //수정 api 호출 부분
    console.log(formData);
  };

  const completeHandler = (data: Address) => {
    setValue("address", data.address);
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
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

      const imageUrl = URL.createObjectURL(file);
      setValue("profileImageUrl", imageUrl);
    }
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isFetchError || !profile)
    return <div>프로필 정보를 가져오는 중 오류가 발생했습니다.</div>;

  return (
    <ProfileWrapper>
      <ProfileImageWrapper>
        <ProfileImage src={profileImage} alt="Profile" />
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
              <TextField maxRows={1} minRows={1} {...field} label="닉네임" />
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
                value={field.value}
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
                value={field.value}
                onChange={(event) =>
                  field.onChange(event.target.value as string[])
                }
              />
            )}
          />
        </BasicWrapper>

        <BasicWrapper>
          <SubtitleWrapper>지역</SubtitleWrapper>
          <CustomButton variant="outlined" size="small" onClick={handleOpen}>
            주소 검색
          </CustomButton>
        </BasicWrapper>
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <>
              <TextField {...field} multiline maxRows={1} disabled />
              {isOpen && (
                <div>
                  <DaumPostcode onComplete={completeHandler} />
                </div>
              )}
            </>
          )}
        />
        <Controller
          name="addressDetail"
          control={control}
          render={({ field }) => (
            <TextField {...field} maxRows={1} minRows={1} />
          )}
        />

        <SubtitleWrapper>자기소개</SubtitleWrapper>
        <Controller
          name="introduction"
          control={control}
          render={({ field }) => (
            <TextField {...field} multiline minRows={3} maxRows={3} />
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
          <span className="login">회원탈퇴</span>
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
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.5);
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
