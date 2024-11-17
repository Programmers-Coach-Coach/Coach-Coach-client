import { ISport } from "@/models/sports.model";
import qs from "qs";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  item: ISport;
}

const HomeSport = ({ item }: Props) => {
  const { sportId, sportName, sportImageUrl } = item;
  const query = qs.stringify({ sportsIds: sportId });

  return (
    <Wrapper $id={sportId} to={`/coach-list?${query}`}>
      <img src={sportImageUrl} alt={sportName} loading="lazy" />
      <p>{sportName}</p>
    </Wrapper>
  );
};

const Wrapper = styled(Link)<{ $id: number }>`
  display: flex;
  flex-direction: column;

  width: 100%;

  img {
    width: 100%;
    border-radius: 10px;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.3px;
    text-align: center;
  }
`;
export default HomeSport;
