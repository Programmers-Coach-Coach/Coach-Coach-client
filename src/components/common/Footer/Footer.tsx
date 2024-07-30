import { styled } from "styled-components";
import { GrHomeRounded } from "react-icons/gr";
import { CiDumbbell } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate(`/`);
  };

  return (
    <FooterStyle>
      <GrHomeRounded size="20px" color="#F8F9FA" onClick={onClickHome} />
      <CiDumbbell size="30px" color="#F8F9FA" />
      <CiBellOn size="30px" color="#F8F9FA" />
      <RxPerson size="25px" color="#F8F9FA" />
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
  max-width: 560px;
  height: 20px;
`;
export default Footer;
