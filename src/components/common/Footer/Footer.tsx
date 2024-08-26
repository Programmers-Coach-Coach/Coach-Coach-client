import NotificationBadge from "@/components/badge/NotificationBadge";
import { useFetchAuth } from "@/hooks/useFetchAuth";
import useModal from "@/hooks/useModal";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Modal from "../modal/Modal";
import FooterPicker from "../modal/contents/FooterPicker";
import IconButton from "@/components/Icon/IconButton";

const Footer = () => {
  const { data } = useFetchAuth();
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
    navigate("/notification");
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
          <FooterPicker closeModal={routineModal.closeModal} schema="routine" />
        </Modal>
      )}
      {profileModal.isModal && (
        <Modal closeModal={profileModal.closeModal} position="footer-above">
          <FooterPicker closeModal={profileModal.closeModal} schema="profile" />
        </Modal>
      )}
      <FooterStyle>
        <IconButton
          name="home"
          size="25px"
          color="gray3"
          onClick={onClickHome}
        />
        <IconButton
          name="routine"
          size="30px"
          color="gray3"
          onClick={onClickRoutine}
        />
        <Notification>
          <IconButton
            name="alarm"
            size="25px"
            color="gray3"
            onClick={onClickAlarm}
          />
          {data && data.countOfNotifications > 0 && (
            <NotificationBadge count={data?.countOfNotifications} />
          )}
        </Notification>
        <IconButton
          name="profile"
          size="25px"
          color="gray3"
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

const Notification = styled.div`
  position: relative;
`;
export default Footer;
