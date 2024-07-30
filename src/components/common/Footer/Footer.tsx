import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { ICONS } from "../../../constants/assets";

const Footer = () => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate(`/`);
  };

  return (
    <FooterStyle>
      <div className="HomeIcon" onClick={onClickHome}>
        {ICONS.home}
      </div>
      <div className="RoutineIcon">{ICONS.routine}</div>
      <div className="AlarmIcon">{ICONS.alarm}</div>
      <div className="ProfileIcon">{ICONS.human.profile}</div>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.color.semiTransparentBlack};
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  height: 60px;

  .HomeIcon svg {
    width: 20px;
    height: 20px;
  }
  .RoutineIcon svg {
    width: 30px;
    height: 30px;
  }
  .AlarmIcon svg {
    width: 30px;
    height: 30px;
  }
  .ProfileIcon svg {
    width: 25px;
    height: 25px;
  }

  svg {
    color: ${({ theme }) => theme.color.white};
  }
`;
export default Footer;
