import { ISports } from "@/models/home.model";
import styled from "styled-components";
import HomeHeader from "./common/HomeHeader";
import { sportsList } from "@/data/sportsList";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BackgroundDimmed } from "@/style/global";

const SportsList = () => {
  return (
    <SportsListStyle>
      <HomeHeader
        title="Sports"
        subTitle="운동 종목에 맞는 코치 리스트로 이동합니다."
        showAll
      />
      <SportsSlider sportsList={sportsList} />
    </SportsListStyle>
  );
};

interface SportsSliderProps {
  sportsList: ISports[];
}
const SportsSlider = ({ sportsList }: SportsSliderProps) => {
  const SLIDE_WIDTH = 120; // 슬라이드 고정 너비
  const SLIDE_MARGIN = 30; // 슬라이드 사이의 간격
  const TOTAL_WIDTH = SLIDE_WIDTH + SLIDE_MARGIN;
  const MIN_WIDTH = 600; // 최소 너비 설정

  // 슬라이드 한 줄에 들어갈 수 있는 슬라이드 수를 소수점으로 계산
  const slidesToShow = Math.min(window.innerWidth, MIN_WIDTH) / TOTAL_WIDTH;

  const settings = {
    className: "center",
    centerPadding: "0px",
    speed: 500,
    dots: true,
    arrows: false,
    infinite: false,
    swipeToSlide: true,
    rows: 2, // 두 줄로 고정
    slidesToShow
  };
  return (
    <SportSliderStyle {...settings}>
      {sportsList.map((item, index) => (
        <SportComponent key={index} item={item} />
      ))}
    </SportSliderStyle>
  );
};

const SportSliderStyle = styled(Slider)`
  .slick-track {
    display: flex;
  }
  .slick-slide {
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: center;
  }

  .slick-dots {
    bottom: -40px;
  }
`;

const SportsListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

interface SportComponentProps {
  item: ISports;
}

const SportComponent = ({ item }: SportComponentProps) => {
  const { sportsName, sportsImageUrl } = item;
  return (
    <SportComponentStyle to="/" onClick={() => {}}>
      <img src={sportsImageUrl} alt={sportsName} />
      <p>{sportsName}</p>
      <BackgroundDimmed />
    </SportComponentStyle>
  );
};

const SportComponentStyle = styled(Link)`
  display: block;
  flex-shrink: 0;
  position: relative;
  width: 120px;
  height: 100px;

  p {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 14px;
    font-weight: 800;
    line-height: 16px;
    z-index: 10;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }
`;

export default SportsList;
