import profilePath from "@/assets/images/profile.png";
import useFetchProfile from "@/hooks/queries/useFetchUserProfile";
import useAuth from "@/hooks/useAuth";
import { IMyPageFormValues } from "@/models/auth.model";
import { getGenderLabel } from "@/utils/genderUtils";
import { TextField } from "@mui/material";
import { useEffect, useRef } from "react";
import { Controller, FieldErrors, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import styled from "styled-components";
import CustomButton from "../common/Button/CustomButton";
import Loading from "../loading/Loading";
import AddressSearchField from "./AddressSearchField";
import imageCompression from "browser-image-compression";
import EditIcon from "../../assets/images/edit-icon.svg";
import HorizontalLine from "../common/HorizontalLine/HorizontalLine";
import { AUTH_REGEX } from "@/constants/regex";
import CommonInput from "../common/InputField/Text/CommonInput";
import GenderSelectBox from "../common/InputField/Select/GenderSelectBox";
import SportSelectBox from "../common/InputField/Select/SportSelectBox";

const allowedExtensions = [
  "jpg",
  "jpeg",
  "jfif",
  "png",
  "gif",
  "bmp",
  "webp",
  "tif",
  "tiff"
];
const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ProfileSection = () => {
  const { profile, isFetchError, isLoading } = useFetchProfile();

  const { editUserProfile } = useAuth();
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
      setValue("profileImageUrl", profile.profileImageUrl || profilePath);
      setValue("localAddress", profile.localAddress || "");
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
      const file = inputRef.current.files[0];

      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      if (fileExtension === "gif") {
        formData.append("profileImage", file);
      } else {
        const options = {
          maxSizeMB: 0.5,
          maxWidthOrHeight: 200,
          useWebWorker: true,
          fileType: "image/webp"
        };
        const compressedFile = await imageCompression(file, options);

        const fileName = file.name.split(".")[0];
        const webpFile = new File([compressedFile], `${fileName}.webp`, {
          type: "image/webp"
        });
        formData.append("profileImage", webpFile);
      }
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
    editUserProfile(formData);
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
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

      if (fileExtension === "gif") {
        setValue("profileImageUrl", file);
      } else {
        const options = {
          maxSizeMB: 0.5,
          maxWidthOrHeight: 200,
          useWebWorker: true,
          fileType: "image/webp"
        };
        const compressedFile = await imageCompression(file, options);

        const fileName = file.name.split(".")[0];
        const webpFile = new File([compressedFile], `${fileName}.webp`, {
          type: "image/webp"
        });
        setValue("profileImageUrl", webpFile);
      }
    }
  };

  const getProfileImageUrl = () => {
    if (profileImage instanceof File) {
      return URL.createObjectURL(profileImage);
    }
    return profileImage || "";
  };

  const onInvalid = (errors: FieldErrors<IMyPageFormValues>) => {
    if (errors.nickname?.type === "required") {
      toast.error("닉네임을 입력해주세요.");
    } else {
      toast.error(
        "닉네임은 2~10자까지만 가능합니다.\n(특수문자, 연속적인 공백 제외)"
      );
    }
  };

  if (isLoading) return <Loading />;
  if (isFetchError || !profile) {
    return <div>프로필 정보를 가져오는 중 오류가 발생했습니다.</div>;
  }

  return (
    <ProfileWrapper>
      <ProfileImageWrapper>
        <ProfileImage src={getProfileImageUrl()} alt="Profile" />
        <IconWrapper src={EditIcon} onClick={() => inputRef.current?.click()} />
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </ProfileImageWrapper>
      <HorizontalLine />
      <InfoWrapper>
        <BasicWrapper>
          <SubtitleWrapper>닉네임</SubtitleWrapper>
          <NicknameWrapper>
            <Controller
              name="nickname"
              control={control}
              rules={{
                maxLength: 10,
                pattern: {
                  value: AUTH_REGEX.nickname,
                  message: "닉네임은 공백을 포함하여 최대 10자 이내여야 합니다."
                },
                required: true
              }}
              render={({ field }) => (
                <CommonInput
                  {...field}
                  inputHeight="36px"
                  type="text"
                  placeholder="닉네임을 입력해 주세요."
                />
              )}
            />
          </NicknameWrapper>
        </BasicWrapper>
        <BasicWrapper>
          <SubtitleWrapper>성별</SubtitleWrapper>
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <GenderSelectBox
                value={field.value}
                onChange={(event) =>
                  field.onChange(event.target.value as string)
                }
              />
            )}
          />
        </BasicWrapper>
        <BasicWrapper>
          <SubtitleWrapper>관심 종목</SubtitleWrapper>
          <Controller
            name="interestedSports"
            control={control}
            render={({ field }) => (
              <SportSelectBox
                value={field.value || []}
                onChange={(event) =>
                  field.onChange(event.target.value as string[])
                }
              />
            )}
          />
        </BasicWrapper>
        <AddrressWrapper>
          <SubtitleWrapper>주소</SubtitleWrapper>
          <Controller
            name="localAddress"
            control={control}
            render={({ field }) => (
              <AddressSearchField
                type="home"
                value={field.value || ""}
                inputWidth="100%"
                onAddressSelect={(address) => field.onChange(address)}
              />
            )}
          />
        </AddrressWrapper>

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

        <CustomButton
          size="full"
          variant="contained"
          onClick={handleSubmit(onSubmit, onInvalid)}
        >
          수정하기
        </CustomButton>
      </InfoWrapper>
    </ProfileWrapper>
  );
};

const AddrressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ProfileImageWrapper = styled.div`
  position: relative;
  display: flex;
  margin: 0 auto 10px;
  width: 120px;
  height: 120px;
  padding: 4px; /* Padding for the border */
  background: linear-gradient(135deg, #00aaff, #a740ff);
  border-radius: 50%;
`;

const IconWrapper = styled.img`
  position: absolute;
  bottom: 0px;
  right: 5px;
  width: 24px;
  height: 24px;
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 10px;
  padding: 2px;
  color: ${({ theme }) => theme.color.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.gray1};
  object-fit: cover;
`;

const BasicWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubtitleWrapper = styled.div`
  width: 25%;
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
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`;

const NicknameWrapper = styled.div`
  width: 70%;
`;

export default ProfileSection;
