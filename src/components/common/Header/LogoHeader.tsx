import { useFetchAuth } from "@/hooks/useFetchAuth";
import { styled } from "styled-components";
import Logo from "../../../assets/images/Logo.png";

const LogoHeader = () => {
  const { data } = useFetchAuth();
  return (
    <LogoHeaderStyle>
      <img src={Logo} alt="Logo" />
      {data?.nickname && (
        <h2>
          <span>안녕하세요! </span>
          {data?.nickname}
          <span>님</span>
        </h2>
      )}
    </LogoHeaderStyle>
  );
};

const LogoHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 0;

  img {
    width: 90px;
    height: 50px;
  }

  h2 {
    display: flex;
    gap: 6px;
  }
  span {
    font-size: 12px;
  }
`;

export default LogoHeader;
