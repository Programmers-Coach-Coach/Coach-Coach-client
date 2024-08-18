import PopularCoaches from "@/components/coach/PopularCoaches";
import Search from "@/components/common/InputField/search/Search";
import SEO from "@/components/common/SEO/SEO";
import SportsList from "@/components/sports/SportsList";
import useHome from "@/hooks/useHome";
import { WhiteSpace } from "@/style/global";
import styled from "styled-components";

const Home = () => {
  const { data, isLoading, isError } = useHome();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>무언가 잘못됨</div>;

  return (
    <HomeStyle>
      <SEO
        title="코치코치"
        description="코치코치 서비스 메인페이지 입니다."
        keywords="홈트, 운동, 코칭"
        url="/"
      />
      <Search placeholder="코치명을 검색하세요" />
      <WhiteSpace $height={40} />
      <SportsList sportsList={data.sports} />
      <WhiteSpace $height={80} />
      <PopularCoaches popularCoaches={data.coaches} />
      <WhiteSpace $height={40} />
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  padding: 0 0 60px 0;
`;

export default Home;
