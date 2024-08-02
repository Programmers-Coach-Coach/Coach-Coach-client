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
      <Icon name="home" size="20px" color="text" onClick={onClickHome} />
      <Icon name="routine" size="30px" color="text" />
      <Icon name="alarm" size="30px" color="text" />
      <Icon name="profile" size="25px" color="text" />
    </FooterStyle>
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
`;
export default Footer;
