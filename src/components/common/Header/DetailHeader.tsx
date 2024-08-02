import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/Icon/Icon";

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
      <Icon name="back" size="24px" color="text" onClick={onClickBack} />
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
`;

export default DetailHeader;
