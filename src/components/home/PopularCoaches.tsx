import styled from "styled-components";
import HomeHeader from "./common/HomeHeader";
import { IPopularCoach } from "@/models/home.model";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LineClamp } from "@/style/global";
import Heart from "../common/Heart";

interface Props {
  popularCoaches: IPopularCoach[];
}

interface CoachesSliderProps {
  popularCoaches: IPopularCoach[];
}

interface CoachProps {
  coach: IPopularCoach;
}

const PopularCoaches = ({ popularCoaches }: Props) => {
  return (
    <PopularCoachStyle>
      <HomeHeader
        title="Popular Coach"
        subTitle="코치코치에 가장 인기있는 코치와 함께 운동해보세요!"
      />
      <CoachesSlider popularCoaches={popularCoaches} />
    </PopularCoachStyle>
  );
};

const CoachesSlider = ({ popularCoaches }: CoachesSliderProps) => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    focusOnSelect: true,
    infinite: false,
    pauseOnFocus: true,
    pauseOnHover: true
  };

  return (
    <RemovePadding>
      <CoachesSliderStyle {...settings}>
        {popularCoaches.map((coach) => (
          <Coach key={coach.coachId} coach={coach} />
        ))}
      </CoachesSliderStyle>
    </RemovePadding>
  );
};

const Coach = ({ coach }: CoachProps) => {
  return (
    <CoachStyle>
      <img src={coach.coachImageUrl} alt={coach.coachName} />
      <button>
        <Heart checked={true} size="small" />
        <p className="b3">{coach.likes}</p>
      </button>
      <BoxText>
        <LineClamp $line={1} className="b3">
          {coach.coachName}
        </LineClamp>
        <ul className="coaching-sports">
          {coach.coachingSports.map((item) => (
            <li key={item.sportsId}>#{item.sportsName}</li>
          ))}
        </ul>
        <LineClamp $line={2} className="b2 desc">
          {coach.description}
        </LineClamp>
      </BoxText>
    </CoachStyle>
  );
};

const PopularCoachStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const RemovePadding = styled.div`
  margin: 0 -20px;
`;

const CoachStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;

  height: 246px;
  position: relative;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  overflow: hidden;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    display: flex;
    align-items: center;
    gap: 7px;
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 10;
    border: none;
    padding: 5px;
    border-radius: 5px;
  }
`;

const CoachesSliderStyle = styled(Slider)`
  .slick-slide {
    transition:
      transform 0.5s ease,
      opacity 0.5s ease;
  }

  .slick-center .slick-slide {
    transform: scale(1.3);
    /* z-index: 1; */
  }

  .slick-slide:not(.slick-center) {
    transform: scale(0.8);
    opacity: 0.7; /* 나머지 슬라이드를 투명하게 만듦 */
  }

  .slick-dots {
    bottom: -40px;
  }
`;

const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px 10px 20px;
  z-index: 10;
  color: #fff;

  .desc {
    width: 100%;
    overflow: hidden;
  }

  .coaching-sports {
    display: flex;
    align-items: center;
    gap: 9px;

    li {
      display: inline-flex;
      font-size: 9px;
      padding: 4px 9px;
      border-radius: ${({ theme }) => theme.borderRadius.default};
      background-color: ${({ theme }) => theme.color.gray3};
    }
  }
`;

export default PopularCoaches;
