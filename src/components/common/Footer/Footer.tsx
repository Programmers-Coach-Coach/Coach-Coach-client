import IconButton from "@/components/Icon/IconButton";
import NotificationBadge from "@/components/badge/NotificationBadge";
import { useFetchAuth } from "@/hooks/useFetchAuth";
import useModal from "@/hooks/useModal";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Modal from "../modal/Modal";
import FooterPicker from "../modal/contents/FooterPicker";

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

  const onClickCoachList = () => {
    navigate("/coach-list");
  };

  const activePath = (...pathname: string[]) => {
    return pathname.some((path) => path === location.pathname);
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
          color={activePath("/") ? "primary" : "gray3"}
          onClick={onClickHome}
        />
        <IconButton
          name="routine"
          size="30px"
          color={
            activePath("/routine", "/routine/my-coach") ? "primary" : "gray3"
          }
          onClick={onClickRoutine}
        />
        <IconButton
          name="list"
          size="25px"
          color={activePath("/coach-list") ? "primary" : "gray3"}
          onClick={onClickCoachList}
        />
        <Notification>
          <IconButton
            name="alarm"
            size="25px"
            color={activePath("/notification") ? "primary" : "gray3"}
            onClick={onClickAlarm}
          />
          {data && data.countOfNotifications > 0 && (
            <NotificationBadge count={data?.countOfNotifications} />
          )}
        </Notification>
        <IconButton
          name="profile"
          size="25px"
          color={
            activePath("/mypage", "/manage", "/record-list", "/record")
              ? "primary"
              : "gray3"
          }
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
