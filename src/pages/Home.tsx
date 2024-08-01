import PopularCoaches from "@/components/home/PopularCoaches";
import SportsList from "@/components/home/SportsList";
import { popularCoaches } from "@/data/coach";
import { WhiteSpace } from "@/style/global";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeStyle>
      <div className="search">search</div>
      <WhiteSpace $height={40} />
      <SportsList />
      <WhiteSpace $height={80} />
      <PopularCoaches popularCoaches={popularCoaches} />
      <WhiteSpace $height={40} />
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  padding: 0 0 60px 0;
`;

export default Home;
