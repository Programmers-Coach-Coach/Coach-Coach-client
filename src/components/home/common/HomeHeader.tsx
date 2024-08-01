import styled from "styled-components";

interface Props {
  title: string;
  subTitle: string;
  showAll?: boolean;
}
const HomeHeader = ({ title, subTitle, showAll = false }: Props) => {
  return (
    <HomeHeaderStyle>
      <h2>{title}</h2>
      <p className="b2">{subTitle}</p>
      {showAll && <button className="showall b2">showAll</button>}
    </HomeHeaderStyle>
  );
};

const HomeHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  width: 100%;
  color: ${({ theme }) => theme.color.white};

  .showall {
    position: absolute;
    top: 4px;
    right: 0;
    color: #5b818e;
  }
`;
export default HomeHeader;
