import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 250px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Half = styled.div`
  display: flex;
  width: 100%;
  height: 107px;
  gap: 15px;
`;

export const SportsListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: hidden;
`;

export const SportStyle = styled(Link)<{ $id: number }>`
  flex-shrink: 0;
  width: 180px;
  height: 107px;
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
