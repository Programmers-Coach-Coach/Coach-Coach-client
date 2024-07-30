import { styled } from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface DetailHeaderProps {
  title: string;
}

const DetailHeader = ({ title }: DetailHeaderProps) => {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <DetailHeaderStyle>
      <IoIosArrowBack size="24px" color="#F8F9FA" onClick={onClickBack} />
      <h1>{title}</h1>
    </DetailHeaderStyle>
  );
};

const DetailHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  margin: 0;

  svg {
    position: absolute;
    left: 20px;
  }

  h1 {
    margin: 0;
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: 36px;
  }
`;

export default DetailHeader;
