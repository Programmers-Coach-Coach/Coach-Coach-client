import { ISport } from "@/models/sports.model";
import qs from "qs";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { SportsListStyle, SportStyle, StyledSlider } from "./SportsList.css";

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
      <SportsSlider sportsList={sportsList} />
    </SportsListStyle>
  );
};

const SportsSlider = ({ sportsList }: SportsSliderProps) => {
  const settings = {
    slidesToShow: 2.5,
    rows: 2,
    initialSlide: 0,
    infinite: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1.2
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1.5
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1.8
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2.2
        }
      }
    ]
  };

  return (
    <StyledSlider {...settings}>
      {sportsList?.map((item) => <Sport key={item.sportId} item={item} />)}
    </StyledSlider>
  );
};

const Sport = ({ item }: SportProps) => {
  const { sportId, sportName, sportImageUrl } = item;
  const query = qs.stringify({ sportsIds: sportId });

  return (
    <SportStyle $id={sportId} to={`/coach-list?${query}`}>
      <img src={sportImageUrl} alt={sportName} />
      <p>{sportName}</p>
    </SportStyle>
  );
};
export default SportsList;
