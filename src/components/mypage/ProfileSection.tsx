import profilePath from "@/assets/images/profile.png";
import Modal from "@/components/common/modal/Modal";
import useFetchProfile from "@/hooks/queries/useFetchUserProfile";
import useAuth from "@/hooks/useAuth";
import useModal from "@/hooks/useModal";
import { IMyPageFormValues } from "@/models/auth.model";
import { getGenderLabel } from "@/utils/genderUtils";
import { FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { useEffect, useRef } from "react";
import { Controller, FieldErrors, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaCirclePlus } from "react-icons/fa6";
import styled from "styled-components";
import CustomButton from "../common/Button/CustomButton";
import SelectBox from "../common/InputField/Select/SelectBox";
import Loading from "../loading/Loading";
import AddressSearchField from "./AddressSearchField";
import imageCompression from "browser-image-compression";

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
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const ProfileSection = () => {
  const { profile, isFetchError, isLoading } = useFetchProfile();
  const { isModal, openModal, closeModal } = useModal();
  const onClickAdd = () => {
    openModal();
  };
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
      console.log("Original File Size:", file.size / 1024, "KB");

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
        console.log("Compressed File Size:", compressedFile.size / 1024, "KB");

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
        setValue("profileImageUrl", file); // GIF는 그대로 설정
      } else {
        const options = {
          maxSizeMB: 0.5, // 최대 1MB로 제한
          maxWidthOrHeight: 200, // 최대 너비나 높이
          useWebWorker: true,
          fileType: "image/webp" // WebP 형식으로 변환
        };
        const compressedFile = await imageCompression(file, options);
        console.log("Original File Size:", file.size / 1024, "KB");
        console.log("Compressed File Size:", compressedFile.size / 1024, "KB");

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
    return profileImage || ""; // 기본 이미지 URL이나 빈 문자열로 대체
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
      {isModal && (
        <Modal closeModal={closeModal} position="center">
          <ModalTitleWrapper>회원탈퇴를 하시겠습니까?</ModalTitleWrapper>
          <ButtonWrapper>
            <CustomButton
              size="mini"
              variant="containedError"
              onClick={withdrawUser}
            >
              확인
            </CustomButton>
            <CustomButton
              size="mini"
              variant="containedCancel"
              onClick={closeModal}
            >
              취소
            </CustomButton>
          </ButtonWrapper>
        </Modal>
      )}
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
          <SubtitleWrapper>닉네임</SubtitleWrapper>
          <Controller
            name="nickname"
            control={control}
            rules={{
              maxLength: 10,
              pattern: {
                value:
                  /^(?!.*\s{2,})([0-9a-zA-Z가-힣][0-9a-zA-Z가-힣\s]{0,8}[0-9a-zA-Z가-힣])$/,
                message: "닉네임은 공백을 포함하여 최대 10자 이내여야 합니다."
              },
              required: true
            }}
            render={({ field }) => (
              <TextField
                maxRows={1}
                minRows={1}
                {...field}
                label="닉네임"
                value={field.value || ""}
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
                value={field.value || ""}
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
              type="home"
              label="지역"
              value={field.value || ""}
              onAddressSelect={(address) => field.onChange(address)}
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
          onClick={handleSubmit(onSubmit, onInvalid)}
        >
          수정하기
        </CustomButton>
        <AddTextStyle>
          <span onClick={onClickAdd}>회원탈퇴</span>
        </AddTextStyle>
      </InfoWrapper>
    </ProfileWrapper>
  );
};

const ModalTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;
const AddTextStyle = styled.div`
  display: flex;
  justify-content: center;
  span {
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;
    cursor: pointer;
  }
`;
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
  border-radius: 8px;
  background: ${({ theme }) => theme.color.gray1};
  object-fit: cover;
`;

const BasicWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
