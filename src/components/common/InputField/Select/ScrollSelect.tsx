import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

interface TimeSetContentProps {
  TIMESETS: number[];
  dispatch: React.Dispatch<React.SetStateAction<number | string>>;
}

const TIMESET_HEIGHT = 40; // 600px 이상일 때 사용될 고정 높이
const TIMESET_HEIGHT_VH = 4.5; // 600px 이하일 때 vh 단위로 설정할 높이
const TIMESET_COUNT = 5;
const HALF_TIMESET_COUNT = Math.floor(TIMESET_COUNT / 2);

const ScrollSelect = ({ TIMESETS, dispatch }: TimeSetContentProps) => {
  const space = Array.from({ length: HALF_TIMESET_COUNT }, () => "");
  const newList = ["", ...TIMESETS, ...space];
  const [selected, setSelected] = useState(1); // 처음 index가 1
  const [selectedPrev, setSelectedPrev] = useState(0);
  const [selectedNext, setSelectedNext] = useState(2);
  const ref = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const getItemHeight = () => {
    if (window.innerWidth <= 600 && ref.current) {
      return window.innerHeight * (TIMESET_HEIGHT_VH / 100); // vh 단위 계산
    } else {
      return TIMESET_HEIGHT;
    }
  };

  const handleScroll = () => {
    if (ref.current) {
      const itemHeightPx = getItemHeight(); // 동적 높이 계산
      const currentScrollTop = ref.current.scrollTop;

      if (currentScrollTop < itemHeightPx) {
        ref.current.scrollTop = itemHeightPx; // 초기 위치 설정
      }

      const index = Math.floor(
        (currentScrollTop + itemHeightPx / 2) / itemHeightPx
      );

      if (newList[index] !== "") {
        setSelected(index);
        setSelectedPrev(index - 1);
        setSelectedNext(index + 1);

        dispatch(newList[index]);
      }
    }
  };

  useEffect(() => {
    if (ref.current) {
      const itemHeightPx = getItemHeight(); // 동적 높이 계산
      ref.current.scrollTop = selected * itemHeightPx; // 스크롤 초기 위치 설정
    }
  }, [selected]);

  return (
    <List ref={ref} onScroll={handleScroll}>
      <ListCenter />
      {newList.map((item, index) => (
        <ListItem
          key={index}
          isSelected={index === selected}
          isSelectedPrev={index === selectedPrev}
          isSelectedNext={index === selectedNext}
          ref={(el) => (itemRefs.current[index] = el)}
        >
          {item}
        </ListItem>
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: ${TIMESET_HEIGHT * TIMESET_COUNT}px;
  overflow-y: scroll;
  scrollbar-width: none;
  position: relative;

  @media (max-width: 600px) {
    height: calc(${TIMESET_HEIGHT_VH}vh * ${TIMESET_COUNT});
  }
`;

const ListCenter = styled.div`
  height: ${TIMESET_HEIGHT * HALF_TIMESET_COUNT}px;
  position: sticky;
  top: ${TIMESET_HEIGHT}px;

  @media (max-width: 600px) {
    height: calc(${TIMESET_HEIGHT_VH}vh * ${HALF_TIMESET_COUNT});
    top: calc(${TIMESET_HEIGHT_VH}vh);
  }
`;

const ListItem = styled.li.withConfig({
  shouldForwardProp: (prop) =>
    prop !== "isSelected" &&
    prop !== "isSelectedPrev" &&
    prop !== "isSelectedNext"
})<{ isSelected: boolean; isSelectedPrev: boolean; isSelectedNext: boolean }>`
  height: ${TIMESET_HEIGHT}px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    color 0.3s ease,
    font-size 0.3s ease,
    font-weight 0.3s ease;

  color: ${({ theme, isSelected, isSelectedPrev, isSelectedNext }) =>
    isSelected
      ? theme.color.text
      : isSelectedPrev || isSelectedNext
        ? "#9EA3B2"
        : "#767A85"};

  font-size: ${({ isSelected, isSelectedPrev, isSelectedNext }) =>
    isSelected ? "20px" : isSelectedPrev || isSelectedNext ? "16px" : "12px"};

  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};

  @media (max-width: 600px) {
    height: calc(${TIMESET_HEIGHT_VH}vh);
    font-size: ${({ isSelected, isSelectedPrev, isSelectedNext }) =>
      isSelected ? "4vw" : isSelectedPrev || isSelectedNext ? "3vw" : "2.5vw"};
  }
`;

export default ScrollSelect;
