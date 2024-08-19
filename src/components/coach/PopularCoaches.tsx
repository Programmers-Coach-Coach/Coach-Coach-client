import { IPopularCoach } from "@/models/coach.model";
import { LineClamp } from "@/style/global";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import Heart from "../common/InputField/CheckBox/Heart";

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
      <h1>Popular Coach</h1>
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
        {popularCoaches?.map((coach) => (
          <Coach key={coach.coachId} coach={coach} />
        ))}
      </CoachesSliderStyle>
    </RemovePadding>
  );
};

const Coach = ({ coach }: CoachProps) => {
  return (
    <CoachStyle>
      <img src={coach.profileImageUrl} alt={coach.coachName} />
      <button>
        <Heart checked={coach.isLiked} size="small" />
        <p className="b3">{coach.countOfLikes}</p>
      </button>
      <BoxText>
        <LineClamp $line={1} className="b3">
          {coach.coachName}
        </LineClamp>
        <ul className="coaching-sports">
          {coach.coachingSports.map((item) => (
            <li key={item.sportId}>#{item.sportName}</li>
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
  color: ${({ theme }) => theme.color.text};

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
      background-color: ${({ theme }) => theme.color.box};
    }
  }
`;

export default PopularCoaches;
