import logoPath from "@/assets/images/logo.svg";
import { useFetchAuth } from "@/hooks/useFetchAuth";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Icon from "@/components/Icon/Icon";
import NotificationBadge from "@/components/badge/NotificationBadge";

const LogoHeader = () => {
  const { data } = useFetchAuth();
  const navigate = useNavigate();

  const onClickAlarm = () => {
    navigate("/notification");
  };

  const activePath = (...paths: string[]) => paths.includes(location.pathname);

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
            <Icon
              name="alarm"
              size="25px"
              color={activePath("/notification") ? "primary" : "gray3"}
            />
            {data && data.countOfNotifications > 0 && (
              <NotificationBadge count={data?.countOfNotifications} />
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
`;

export default LogoHeader;
