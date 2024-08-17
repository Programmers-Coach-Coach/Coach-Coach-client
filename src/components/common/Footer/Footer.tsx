import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/Icon/Icon";
import useModal from "@/hooks/useModal";
import Modal from "../modal/Modal";
import FooterPicker from "../modal/contents/FooterPicker";

const Footer = () => {
  const navigate = useNavigate();
  const routineModal = useModal();
  const profileModal = useModal();

  const onClickHome = () => {
    navigate(`/`);
  };

  const onClickRoutine = () => {
    if (routineModal.isModal) {
      routineModal.closeModal();
    } else {
      profileModal.closeModal();
      routineModal.openModal();
    }
  };

  const onClickAlarm = () => {
    navigate("/");
  };

  const onClickProfile = () => {
    if (profileModal.isModal) {
      profileModal.closeModal();
    } else {
      routineModal.closeModal();
      profileModal.openModal();
    }
  };

  return (
    <>
      {routineModal.isModal && (
        <Modal closeModal={routineModal.closeModal} position="footer-above">
          <FooterPicker schema="routine" />
        </Modal>
      )}
      {profileModal.isModal && (
        <Modal closeModal={profileModal.closeModal} position="footer-above">
          <FooterPicker schema="profile" />
        </Modal>
      )}
      <FooterStyle>
        <Icon name="home" size="20px" color="text" onClick={onClickHome} />
        <Icon
          name="routine"
          size="30px"
          color="text"
          onClick={onClickRoutine}
        />
        <Icon name="alarm" size="30px" color="text" onClick={onClickAlarm} />
        <Icon
          name="profile"
          size="25px"
          color="text"
          onClick={onClickProfile}
        />
      </FooterStyle>
    </>
  );
};

const FooterStyle = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.color.box};
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  height: 60px;
  z-index: 1001; // FooterAbove(Footer 아이콘 클릭 시 모달)보다 앞에 있어 FooterAbove가 가리지 않게 함
`;
export default Footer;
