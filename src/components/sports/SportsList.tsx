import { ISport } from "@/models/sports.model";
import {
  Half,
  Slider,
  SportsListStyle,
  SportStyle,
  Wrapper
} from "./SportsList.css";

interface Props {
  sportsList: ISport[];
}

interface SportsSliderProps {
  sportsList: ISport[];
}

interface SportProps {
  item: ISport;
}

const SportsList = ({ sportsList }: Props) => {
  return (
    <SportsListStyle>
      <h1>Sports</h1>
      <SportsSlider sportsList={sportsList} />
    </SportsListStyle>
  );
};

const SportsSlider = ({ sportsList }: SportsSliderProps) => {
  const len = Math.ceil(sportsList.length / 2);
  return (
    <Wrapper>
      <Slider>
        <Half>
          {sportsList
            ?.slice(0, len)
            .map((item) => <Sport key={item.sportId} item={item} />)}
        </Half>
        <Half>
          {sportsList
            ?.slice(len)
            .map((item) => <Sport key={item.sportId} item={item} />)}
        </Half>
      </Slider>
    </Wrapper>
  );
};

const Sport = ({ item }: SportProps) => {
  const { sportId, sportName, sportImageUrl } = item;

  return (
    <SportStyle $id={sportId} to="/coach-list">
      <img src={sportImageUrl} alt={sportName} />
      <p>{sportName}</p>
    </SportStyle>
  );
};
export default SportsList;
