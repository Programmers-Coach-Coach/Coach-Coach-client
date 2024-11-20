import { useGetSports } from "@/hooks/useHome";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styled from "styled-components";
import EmptyVersion2 from "../common/Empty/EmptyVersion2";
import Loading from "../loading/Loading";
import HomeSport from "../sport/HomeSport";

interface Props {
  isOpen: boolean;
}

const SportsList = ({ isOpen }: Props) => {
  const { data, isLoading, isError } = useGetSports();

  if (isLoading) return <Loading textDisabled={true} />;
  if (isError || !data)
    return (
      <EmptyVersion2 imgName="warning" height="100px">
        서버가
        <br />
        죽었어요
      </EmptyVersion2>
    );

  const len = isOpen ? data.length : 4;

  return (
    <Wrapper>
      {data
        ?.slice(0, len)
        .map((item) => <HomeSport key={item.sportId} item={item} />)}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 21px;
  row-gap: 14px;
`;

export default SportsList;
