import SportsList from "@/components/home/SportsList";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeStyle>
      <div className="search">search</div>
      <SportsList />
      <div className="popular-coach">popularCoach</div>
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export default Home;
