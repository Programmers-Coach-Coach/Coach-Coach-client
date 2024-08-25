import logoPath from "@/assets/images/Logo.png";
import { useFetchAuth } from "@/hooks/useFetchAuth";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const LogoHeader = () => {
  const { data } = useFetchAuth();
  return (
    <LogoHeaderStyle>
      <LogoLink to="/">
        <img src={logoPath} alt="Logo" />
      </LogoLink>
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

  h2 {
    display: flex;
    gap: 6px;
  }
  span {
    font-size: 12px;
  }
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

export default LogoHeader;
