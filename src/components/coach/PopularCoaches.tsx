import profilePath from "@/assets/images/profile.png";
import { IPopularCoach } from "@/models/coach.model";
import { LineClamp } from "@/style/global";
import { useNavigate } from "react-router-dom";
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
      <Title>
        TOP 3<span className="sub-title">이번 주 인기 코치</span>
      </Title>
      <CoachesSlider popularCoaches={popularCoaches} />
    </PopularCoachStyle>
  );
};

const CoachesSlider = ({ popularCoaches }: CoachesSliderProps) => {
  const settings = {
    speed: 500,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 8000,
    // focusOnSelect: true,
    infinite: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    slidesToShow: 2.6,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.5
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
    <CoachesSliderStyle {...settings}>
      {popularCoaches?.map((coach) => (
        <Coach key={coach.coachId} coach={coach} />
      ))}
    </CoachesSliderStyle>
  );
};

const Coach = ({ coach }: CoachProps) => {
  const navigate = useNavigate();
  const handleLocation = (coachId: number) => {
    navigate(`/coach/${coachId}`);
  };
  return (
    <CoachStyle
      onClick={() => {
        handleLocation(coach.coachId);
      }}
    >
      <Image src={coach.profileImageUrl || profilePath} alt={coach.coachName} />
      <Heart checked={coach.isLiked} size="30px" id={coach.coachId} />
      <LineClamp $line={1} className="b3">
        {coach.coachName}
      </LineClamp>
      <LineClamp $line={2} className="b2 desc">
        {coach.description}
      </LineClamp>
      <CoachingSports className="coaching-sports">
        {coach.coachingSports.map((item) => (
          <li key={item.sportId}>#{item.sportName}</li>
        ))}
      </CoachingSports>
    </CoachStyle>
  );
};

const PopularCoachStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  overflow: hidden;
`;

const Title = styled.h1`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  color: ${({ theme }) => theme.color.primary};
  .sub-title {
    font-size: 16px;
    font-weight: 600;
  }
`;

const CoachStyle = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  cursor: pointer;
  overflow: hidden;

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

const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.gray1};
`;

const CoachesSliderStyle = styled(Slider)`
  .slick-slide {
    padding: 0;
    transition:
      transform 0.5s ease,
      opacity 0.5s ease;
  }
  .slick-track {
    display: flex;
    gap: 10px;
    margin: 0 -10px;
  }
`;

const CoachingSports = styled.ul`
  display: flex;
  align-items: center;
  gap: 9px;

  margin-top: 10px;

  li {
    display: inline-flex;
    font-size: 9px;
    padding: 4px 9px;
    color: ${({ theme }) => theme.color.primary};
    border: 1px solid ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.background};
    border-radius: ${({ theme }) => theme.borderRadius.default};
  }
`;
export default PopularCoaches;
