import { ISports } from "@/models/home.model";
import styled from "styled-components";
import HomeHeader from "./HomeHeader";
import { sportsList } from "@/data/sportsList";

const SportsList = () => {
  // 두 개의 행에 아이템을 반반씩 나누기
  const midIndex = Math.ceil(sportsList.length / 2);
  const firstRowItems = sportsList.slice(0, midIndex);
  const secondRowItems = sportsList.slice(midIndex);

  return (
    <SportsListStyle>
      <HomeHeader
        title="Sports"
        subTitle="운동 종목에 맞는 코치 리스트로 이동합니다."
        showAll
      />
      <BodyStyle>
        <Row>
          {firstRowItems.map((item, index) => (
            <SportComponent key={index} item={item} />
          ))}
        </Row>
        <Row>
          {secondRowItems.map((item, index) => (
            <SportComponent key={index} item={item} />
          ))}
        </Row>
      </BodyStyle>
    </SportsListStyle>
  );
};

const SportsListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const BodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto; /* 행이 너비를 초과할 경우 수평 스크롤 */
`;

interface Props {
  item: ISports;
}

const SportComponent = ({ item }: Props) => {
  const { sportsName, sportsImageUrl } = item;
  return (
    <SportComponentStyle onClick={() => {}}>
      <BackgroundDimmed />
      <img src={sportsImageUrl} alt={sportsName} />
      <p>{sportsName}</p>
    </SportComponentStyle>
  );
};

const SportComponentStyle = styled.div`
  width: 114px;
  height: 100px;
  position: relative;
  flex-shrink: 0;

  p {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 12px;
    font-weight: 800;
    line-height: 16px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const BackgroundDimmed = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.color.lightTransparentBlack};
`;

export default SportsList;
