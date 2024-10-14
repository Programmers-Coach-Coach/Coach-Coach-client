import { styled } from "styled-components";
import IconButton from "../Icon/IconButton";
import useResponsiveIconSize from "@/hooks/useResponsiveIconSize";

interface RoutineDetailProps {
  name: string;
  count: string;
  sets: string;
}

const RoutineDetail = ({ name, count, sets }: RoutineDetailProps) => {
  const iconSize = useResponsiveIconSize("20px", "30px", 375);

  return (
    <RoutineDetailStyle>
      <IconButton name="more" size={iconSize} color="gray1" />
      <RoutineDetailCardStyle>
        <ActionName>{name}</ActionName>
        <ActionSets>{count}</ActionSets>
        <ActionSets>{sets}</ActionSets>
      </RoutineDetailCardStyle>
    </RoutineDetailStyle>
  );
};

const RoutineDetailStyle = styled.div`
  display: flex;
  justify-content: space-around;

  svg {
    margin: 0 0 10px 8px;

    @media (max-width: 375px) {
      margin: 0 0 10px 6px;
    }
  }
`;

const RoutineDetailCardStyle = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: ${({ theme }) => theme.color.gray1};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  width: calc(100% - 100px);
  padding: 0;
  margin: 0 0 8px -15px;

  @media (max-width: 375px) {
    height: 30px;
    width: calc(100% - 65px);
    margin: 0 0 4px -20px;
  }
`;

const ActionName = styled.div`
  flex: 3;
  padding: 0 10px;
  text-align: center;
  margin: 0;

  @media (max-width: 375px) {
    font-size: 10px;
  }
`;

const ActionSets = styled.div`
  flex: 1;
  padding: 0 10px;
  text-align: center;
  margin: 0;

  @media (max-width: 375px) {
    font-size: 10px;
  }
`;

export default RoutineDetail;
