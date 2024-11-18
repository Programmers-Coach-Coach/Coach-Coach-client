import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // useNavigate를 가져옵니다
import { useEffect, useState } from "react";
import Slider from "react-slick"; // react-slick 가져오기
import "slick-carousel/slick/slick.css"; // slick-carousel 기본 스타일
import "slick-carousel/slick/slick-theme.css"; // slick-carousel 테마 스타일
import AlarmImage from "../assets/images/alarm-image.svg"; // 실제 이미지 경로
import RoutineImage from "../assets/images/routine-image.svg"; // 실제 이미지 경로
import RecordImage from "../assets/images/record-image.svg"; // 실제 이미지 경로
import CustomButton from "@/components/common/Button/CustomButton"; // 버튼 컴포넌트 경로
import LogoImage from "../assets/images/logo.svg";
const First = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authStorage = localStorage.getItem("auth-storage");
    if (authStorage) {
      const { state } = JSON.parse(authStorage);
      if (state.isLoggedIn) {
        navigate("/home");
      }
    }
  }, [navigate]);

  const [step, setStep] = useState<"first" | "second">("first");

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const slides = [
    {
      id: 1,
      imageSrc: AlarmImage,
      title: "맞춤형 운동 루틴 작성",
      content: [
        "회원이 직접 루틴을 작성하거나",
        "코치가 개인 맞춤형 루틴을 제공합니다"
      ]
    },
    {
      id: 2,
      imageSrc: RoutineImage,
      title: "알림 기능",
      content: [
        "코치와 매칭 성공 시 즉시 알림을 제공하여",
        "중요한 알림을 놓치지 않도록 합니다"
      ]
    },
    {
      id: 3,
      imageSrc: RecordImage,
      title: "운동 기록 및 신체 정보 관리",
      content: [
        "운동 기록을 달력 형태로 확인하고",
        "신체 기록 데이터를 시각화하여",
        "개인의 운동 성과와 변화를 쉽게 추적할 수 있습니다"
      ]
    }
  ];

  const handleStartClick = () => {
    navigate("/total-login");
  };

  const handleClick = () => {
    setStep("second");
  };

  return (
    <>
      {step === "first" ? (
        <Container onClick={handleClick}>
          <ImageWrapper className="logo" src={LogoImage} />
          <ContentWrapper>
            <div style={{ fontSize: "12px" }}>
              코치 매칭 및 개인 운동 관리 서비스
              <div
                style={{
                  fontSize: "47px",
                  fontWeight: "bold",
                  color: "#0075FF"
                }}
              >
                코치코치
              </div>
            </div>
            <div style={{ fontSize: "20px" }}>화면을 터치해주세요</div>
          </ContentWrapper>
        </Container>
      ) : (
        <Wrapper>
          <MainReviewStyle>
            <Slider {...sliderSettings}>
              {slides.map((slide) => (
                <div key={slide.id}>
                  <img src={slide.imageSrc} alt={slide.title} />
                  <div className="slide-text">
                    <div>{slide.title}</div>
                    {slide.content && (
                      <ul>
                        {slide.content.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </Slider>
          </MainReviewStyle>
          <CustomButton
            size="large"
            variant="contained"
            onClick={handleStartClick}
          >
            시작하기
          </CustomButton>
        </Wrapper>
      )}
    </>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
  gap: 100px;
  cursor: pointer;
`;

const ImageWrapper = styled.img`
  width: 162px;
  height: 162px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const MainReviewStyle = styled.div`
  margin: 0 auto;
  width: 100%;

  .slick-slider > div {
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .slick-dots li button:before {
    font-size: 10px;
    color: #6c757d;
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #6c757d;
  }

  .slick-dots li.slick-active button:before {
    content: "";
    display: inline-block;
    height: 10px;
    background-color: #007bff;
    border-radius: 20px;
  }

  img {
    margin: 0 auto;
    width: 200px;
    max-width: 100%;
    height: auto;
  }

  .slide-text {
    font-size: 15px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    div {
      font-size: 30px;
      font-weight: bold;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        font-size: 16px;
        line-height: 1.5;
      }
    }
  }
`;

export default First;
