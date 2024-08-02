import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/Icon/Icon";

const Footer = () => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate(`/`);
  };

  return (
    <FooterStyle>
      <Icon name="home" size="20px" color="white" onClick={onClickHome} />
      <Icon name="routine" size="30px" color="white" />
      <Icon name="alarm" size="30px" color="white" />
      <Icon name="profile" size="25px" color="white" />
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
`;
export default Footer;
