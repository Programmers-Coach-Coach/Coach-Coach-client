import { isMobile } from "react-device-detect";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import SliderProfile from "../SliderProfile";
import { useState } from "react";

interface IData {
  profileImageUrl: string;
  name: string;
}

interface SportsSliderProps {
  data: IData[];
}

const SliderProfileList = ({ data }: SportsSliderProps) => {
  const [selected, setSelected] = useState(0);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  const settings = {
    slidesToShow: 2.5,
    slidesToScroll: 1,
    infinite: false,
    swipeToSlide: true,
    touchThreshold: 10,
    arrows: !isMobile,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 2.5
        }
      }
    ]
  };

  return (
    <SliderProfileListStyle {...settings} $isMobile={isMobile}>
      {data.map((d, index) => (
        <SliderProfile
          key={index}
          profileImageUrl={d.profileImageUrl}
          name={d.name}
          isSelected={index === selected}
          onClick={() => handleSelect(index)}
        />
      ))}
    </SliderProfileListStyle>
  );
};

export default SliderProfileList;

const SliderProfileListStyle = styled(Slider)<{ $isMobile: boolean }>`
  width: 100%;

  .slick-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5px;
  }

  .slick-track {
    display: flex;
    gap: 5px;
  }

  .slick-arrow {
    z-index: 10;
    width: 50px;
    height: 50px;
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 0px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 50px;
    opacity: 0.1;
  }

  ${({ $isMobile }) =>
    $isMobile &&
    `
    .slick-prev,
    .slick-next {
      display: none;
    }
  `}
`;
