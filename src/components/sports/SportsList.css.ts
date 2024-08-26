import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const SportsListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: hidden;
  margin-left: -10px; // 슬라이더의 왼쪽 패딩때문에 상쇄하기 위해 설정
`;

export const SportStyle = styled(Link)<{ $id: number }>`
  flex-shrink: 0;
  width: 100%;
  aspect-ratio: 2/1;
  background-color: ${({ $id, theme }) => theme.sports[$id]};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  p {
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: ${({ theme }) => theme.color.background};
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.5px;
    z-index: 10;
  }

  img {
    position: absolute;
    top: 22px;
    left: 15px;
    width: 70px;
    height: 70px;
    object-fit: cover;
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
    gap: 10px;
  }
  .slick-slide {
    display: flex;
    flex-direction: column;
    gap: 10px;
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
    opacity: 0.4;
  }
`;
