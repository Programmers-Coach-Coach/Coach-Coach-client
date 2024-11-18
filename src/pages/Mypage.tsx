import styled from "styled-components";
import useAuth from "@/hooks/useAuth";
import { styled as muiStyled } from "@mui/material/styles";
import HorizontalLine from "../components/common/HorizontalLine/HorizontalLine";
import useFetchProfile from "@/hooks/queries/useFetchUserProfile";
import arrowIcon from "../assets/images/arrow-icon.svg";
import { Link, useNavigate } from "react-router-dom";
import Modal from "@/components/common/modal/Modal";
import useModal from "@/hooks/useModal";
import CustomButton from "@/components/common/Button/CustomButton";
import Loading from "@/components/loading/Loading";
import profilePath from "@/assets/images/profile.png";

const Mypage = () => {
  const { userLogout, withdrawUser } = useAuth();
  const { profile, isLoading } = useFetchProfile();
  const logoutModal = useModal();
  const deleteUserModal = useModal();

  const navigate = useNavigate();
  const onClickLogout = () => {
    if (logoutModal.isModal) {
      logoutModal.closeModal();
    } else {
      logoutModal.openModal();
    }
  };
  const onClickDeleteUser = () => {
    if (deleteUserModal.isModal) {
      deleteUserModal.closeModal();
    } else {
      deleteUserModal.openModal();
    }
  };

  const getProfileImageUrl = (profileImageUrl: string | File | undefined) => {
    if (profileImageUrl instanceof File) {
      return URL.createObjectURL(profileImageUrl);
    }
    return profileImageUrl; // 기본 프로필 이미지 경로 설정
  };
  const handleProfileLinkClick = () => {
    navigate("/profile"); // /mypage로 이동
  };
  if (isLoading) return <Loading />;

  return (
    <>
      {logoutModal.isModal && (
        <Modal closeModal={logoutModal.closeModal} position="footer-above">
          <ModalWrapper>
            <LogoutModalWrapper>
              <div
                style={{
                  color: "#0075FF",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
              >
                로그아웃
              </div>
              <div>정말 로그아웃 할까요?</div>
            </LogoutModalWrapper>
            <ButtonWrapper>
              <CloseButtonWrapper
                onClick={onClickLogout}
                size={"medium"}
                variant={"contained"}
              >
                닫기
              </CloseButtonWrapper>
              <CustomButton
                onClick={userLogout}
                size={"medium"}
                variant={"contained"}
              >
                로그아웃
              </CustomButton>
            </ButtonWrapper>
          </ModalWrapper>
        </Modal>
      )}
      {deleteUserModal.isModal && (
        <Modal closeModal={logoutModal.closeModal} position="footer-above">
          <ModalWrapper>
            <LogoutModalWrapper>
              <div
                style={{
                  color: "#0075FF",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
              >
                회원탈퇴
              </div>
              <div>정말 회원탈퇴 할까요?</div>
            </LogoutModalWrapper>
            <ButtonWrapper>
              <CloseButtonWrapper
                onClick={onClickDeleteUser}
                size={"medium"}
                variant={"contained"}
              >
                닫기
              </CloseButtonWrapper>
              <CustomButton
                onClick={withdrawUser}
                size={"medium"}
                variant={"contained"}
              >
                확인
              </CustomButton>
            </ButtonWrapper>
          </ModalWrapper>
        </Modal>
      )}

      <Container>
        <FirstWrapper>
          <ProfileImageWrapper>
            <ProfileImage
              src={getProfileImageUrl(profile?.profileImageUrl) || profilePath}
              alt="Profile"
            />
          </ProfileImageWrapper>
          <ProfileWrapper>
            <div>{profile?.nickname}</div>
            <ProfileLinkWrapper
              style={{ cursor: "pointer" }}
              onClick={handleProfileLinkClick} // 클릭 시 페이지 이동
            >
              <span>프로필 관리</span>
              <img src={arrowIcon} />
            </ProfileLinkWrapper>
          </ProfileWrapper>
        </FirstWrapper>
        <HorizontalLine />
        <div>
          <Wrapper to="/record-list">
            <Text>내 기록</Text>
            <img src={arrowIcon} />
          </Wrapper>
          <Wrapper to="/member">
            <Text>매칭 회원 리스트</Text>
            <img src={arrowIcon} />
          </Wrapper>
        </div>
        <HorizontalLine />
        <div>
          <span
            style={{
              fontSize: "12px",
              padding: "13px"
            }}
          >
            계정 관리
          </span>
          <LogoutWrapper onClick={onClickLogout}>
            <Text>로그아웃</Text>
            <img src={arrowIcon} />
          </LogoutWrapper>
          <LogoutWrapper onClick={onClickDeleteUser}>
            <Text>회원탈퇴</Text>
            <img src={arrowIcon} />
          </LogoutWrapper>
        </div>
      </Container>
    </>
  );
};
const CloseButtonWrapper = muiStyled(CustomButton)(() => ({
  backgroundColor: "#252932 !important", // `!important`로 우선순위 강제
  color: "#9EA3B2 !important"
}));
const LogoutModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px;
`;

const LogoutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  text-decoration: none;
  cursor: pointer;
`;
const Text = styled.span`
  color: #fff;
  font-size: 16px;
`;
const Wrapper = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  text-decoration: none;
  cursor: pointer;
`;

const ProfileLinkWrapper = styled.div`
  display: flex;
  span {
    margin-right: 8px;
  }
  img {
    vertical-align: middle;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const FirstWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const ProfileImageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 70px;
  height: 70px;
  padding: 4px; /* Padding for the border */
  background: linear-gradient(135deg, #00aaff, #a740ff);
  border-radius: 50%;
`;
const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: ${({ theme }) => theme.color.gray1};
  object-fit: cover;
`;
const Container = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  box-sizing: border-box;
  gap: 15px;
`;

export default Mypage;
