import IconButton from "@/components/Icon/IconButton";
import { getClickBackLink } from "@/utils/getTitle";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

interface DetailHeaderProps {
  title: string;
}

const DetailHeader = ({ title }: DetailHeaderProps) => {
  const pathname = location.pathname;
  const navigate = useNavigate();

  const onClickBack = () => {
    const link = getClickBackLink(pathname);
    if (link) {
      navigate(link);
    } else {
      navigate(-1);
    }
  };

  return (
    <DetailHeaderStyle>
      <IconButton name="back" size="24px" color="text" onClick={onClickBack} />
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
