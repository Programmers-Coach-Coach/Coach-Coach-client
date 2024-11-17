import PopularCoaches from "@/components/coaches/PopularCoaches";
import SvgIcon from "@/components/Icon/SvgIcon";
import ReactHelmet from "@/components/SEO/ReactHelmet";
import SportsList from "@/components/sports/SportsList";
import { WhiteSpace } from "@/style/global";
import { useState } from "react";
import styled from "styled-components";

const Home = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <HomeStyle>
      <ReactHelmet
        title="코치코치"
        description="코치코치 서비스 메인페이지 입니다."
        keywords="홈트, 운동, 코칭"
        url="/"
      />
      <SectionHeader>
        <TitleContainer>
          <Title>종목별 코치 리스트</Title>
          <MoreButton onClick={() => setOpen(!isOpen)} $isOpen={isOpen}>
            <span>{isOpen ? "간단히" : "더보기"}</span>
            <SvgIcon
              name="arrow"
              width="10px"
              height="10px"
              stroke="#767676"
              className="arrow-down"
            />
          </MoreButton>
        </TitleContainer>
        <SubTitle>관심 있는 운동을 선택해 주세요</SubTitle>
        <Seperator />
      </SectionHeader>
      <WhiteSpace $height={30} />
      <SportsList isOpen={isOpen} />
      <WhiteSpace $height={55} />
      <SectionHeader>
        <Title>이번주 인기 코치</Title>
        <SubTitle>평점 높은 TOP3 코치를 모았어요</SubTitle>
        <Seperator />
      </SectionHeader>
      <WhiteSpace $height={30} />
      <PopularCoaches />
      <WhiteSpace $height={20} />
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  padding: 0 0 60px 0;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: -0.6px;
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.55px;
  color: #767676;
`;

const MoreButton = styled.button<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.3px;
  color: #767676;
  border-radius: 50%;

  .arrow-down {
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

const Seperator = styled.hr`
  margin-top: 6px;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
  border: 0;
`;

export default Home;
