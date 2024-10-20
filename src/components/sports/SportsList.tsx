import { ISport } from "@/models/sports.model";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import HomeSport from "../sport/HomeSport";

interface Props {
  sportsList: ISport[];
  isOpen: boolean;
}

const SportsList = ({ sportsList, isOpen }: Props) => {
  const len = isOpen ? sportsList.length : 4;
  return (
    <Wrapper>
      {sportsList.slice(0, len).map((item) => (
        <HomeSport key={item.sportId} item={item} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 21px;
  row-gap: 14px;
`;

export default SportsList;
