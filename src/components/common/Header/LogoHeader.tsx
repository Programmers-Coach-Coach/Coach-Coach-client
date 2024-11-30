import logoPath from "@/assets/images/logo.svg";
import SvgIcon from "@/components/Icon/SvgIcon";
import { useFetchAuth } from "@/hooks/useFetchAuth";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const LogoHeader = () => {
  const { data } = useFetchAuth();
  const navigate = useNavigate();

  const onClickAlarm = () => {
    navigate("/notification");
  };

  return (
    <LogoHeaderStyle>
      <LogoLink to="/home">
        <img src={logoPath} alt="Logo" />
      </LogoLink>
      <RightSection>
        {data?.nickname && (
          <h2>
            <span>안녕하세요! </span>
            {data?.nickname}
            <span>님</span>
          </h2>
        )}
        <NotificationButton onClick={onClickAlarm}>
          <NotificationWrapper>
            <SvgIcon name="alarm" width="18px" height="18px" fill="#fff" />
            {data && data.countOfNotifications > 0 && (
              <div className="notification-active"></div>
            )}
          </NotificationWrapper>
        </NotificationButton>
      </RightSection>
    </LogoHeaderStyle>
  );
};

const LogoHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0;
`;

const LogoLink = styled(Link)`
  display: flex;
  width: 90px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  h2 {
    display: flex;
    gap: 6px;
    align-items: flex-end;
  }

  span {
    font-size: 12px;
  }
`;

const NotificationButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

const NotificationWrapper = styled.div`
  position: relative;

  .notification-active {
    position: absolute;
    top: -2px;
    right: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #ff0000;
  }
`;

export default LogoHeader;
