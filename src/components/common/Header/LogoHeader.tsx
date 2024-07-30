import { styled } from "styled-components";
import Logo from "../../../assets/images/Logo.png";

const LogoHeader = () => {
  return (
    <LogoHeaderStyle>
      <img src={Logo} alt="Logo" />
    </LogoHeaderStyle>
  );
};

const LogoHeaderStyle = styled.div`
  padding: 20px;
  margin: 0;

  img {
    width: 90px;
    height: 50px;
  }
`;

export default LogoHeader;
