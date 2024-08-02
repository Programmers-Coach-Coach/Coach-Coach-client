import PopularCoaches from "@/components/coach/PopularCoaches";
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
      <div className="search">search</div>
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
