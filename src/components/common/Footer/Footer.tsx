import Icon from "@/components/Icon/Icon";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
<<<<<<< HEAD
import Modal from "../modal/Modal";
import FooterPicker from "../modal/contents/FooterPicker";
=======
>>>>>>> main
import SvgIcon from "@/components/Icon/SvgIcon";

const Footer = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const profileModal = useModal();
=======
>>>>>>> main

  const onClickHome = () => {
    navigate(`/home`);
  };

  const onClickRoutine = () => {
    navigate("routine");
  };

  const onClickChat = () => {
    navigate("/chat");
  };

  const onClickProfile = () => {
<<<<<<< HEAD
    if (profileModal.isModal) {
      profileModal.closeModal();
    } else {
      profileModal.openModal();
    }
=======
    navigate("/mypage");
>>>>>>> main
  };

  const onClickCoachList = () => {
    navigate("/coach-list");
  };

  const activePath = (...paths: string[]) => paths.includes(location.pathname);

  return (
    <>
<<<<<<< HEAD
      {profileModal.isModal && (
        <Modal closeModal={profileModal.closeModal} position="footer-above">
          <FooterPicker closeModal={profileModal.closeModal} schema="profile" />
        </Modal>
      )}
=======
>>>>>>> main
      <FooterStyle>
        <button onClick={onClickCoachList}>
          <Icon
            name="list"
            size="25px"
            color={activePath("/coach-list") ? "primary" : "gray3"}
          />
          코치리스트
        </button>

        <button onClick={onClickRoutine}>
          <SvgIcon
            name="dumbbell"
            width="25px"
            height="25px"
            fill={activePath("/routine") ? "primary" : "gray3"}
          />
          루틴
        </button>

        <button onClick={onClickHome}>
          <Icon
            name="home"
            size="25px"
            color={activePath("/") ? "primary" : "gray3"}
          />
          홈
        </button>

        <button onClick={onClickChat}>
          <Icon
            name="chat"
            size="25px"
            color={activePath("/chat") ? "primary" : "gray3"}
          />
          채팅
        </button>

        <button onClick={onClickProfile}>
          <Icon
            name="profile"
            size="25px"
            color={
              activePath("/mypage", "/manage", "/record-list", "/record")
                ? "primary"
                : "gray3"
            }
          />
          프로필
        </button>
      </FooterStyle>
    </>
  );
};

const FooterStyle = styled.footer`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  background-color: ${({ theme }) => theme.color.background};
  border-top: 0.5px solid ${({ theme }) => theme.color.gray1};
  border-left: 0.5px solid ${({ theme }) => theme.color.gray1};
  border-right: 0.5px solid ${({ theme }) => theme.color.gray1};
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  height: 60px;
  z-index: 1004; // FooterAbove(Footer 아이콘 클릭 시 모달)보다 앞에 있어 FooterAbove가 가리지 않게 함
  font-size: 12px;

  button {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2px;
    font-size: inherit;
  }
`;

export default Footer;
