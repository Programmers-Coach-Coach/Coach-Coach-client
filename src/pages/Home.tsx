import PopularCoaches from "@/components/coach/PopularCoaches";
import Empty from "@/components/common/Empty/Empty";
import Loading from "@/components/loading/Loading";
import ReactHelmet from "@/components/SEO/ReactHelmet";
import SportsList from "@/components/sports/SportsList";
import useHome from "@/hooks/useHome";
import { WhiteSpace } from "@/style/global";
import styled from "styled-components";

const Home = () => {
  const { data, isLoading, isError } = useHome();

  if (isLoading) return <Loading />;
  if (isError || !data)
    return (
      <Empty
        name="home"
        size="64px"
        color="gray3"
        descriptions="홈 화면을 가져오는 중 오류가 발생했어요."
      />
    );

  return (
    <HomeStyle>
      <ReactHelmet
        title="코치코치"
        description="코치코치 서비스 메인페이지 입니다."
        keywords="홈트, 운동, 코칭"
        url="/"
      />
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
