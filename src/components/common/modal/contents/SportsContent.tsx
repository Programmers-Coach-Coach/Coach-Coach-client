import IconButton from "@/components/Icon/IconButton";
import useResponsiveIconSize from "@/hooks/useResponsiveIconSize";
import { ISport } from "@/models/sports.model";
import { useRoutineStore } from "@/store/routine.store";
import { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";

interface SportsContentProps {
  sportList: ISport[];
  closeModal: () => void;
}

interface ChildComponentHandle {
  childFunction: () => void;
}

const SportsContent = forwardRef<ChildComponentHandle, SportsContentProps>(
  ({ sportList, closeModal }, ref) => {
    useImperativeHandle(ref, () => ({
      childFunction() {
        const sportName = selectedSport ? selectedSport : "";
        setSportName(sportName);

        const sport = sportList.find((sport) => sport.sportName === sportName);
        const sportId = sport ? sport.sportId : 0;
        setSportId(sportId);

        closeModal();
      }
    }));

    const routine = useRoutineStore((set) => set.routine);
    const setSportId = useRoutineStore((set) => set.setSportId);
    const setSportName = useRoutineStore((set) => set.setSportName);
    const [selectedSport, setSelectedSport] = useState<string | null>(
      routine.sportName
    );

    const size = useResponsiveIconSize("4vw", "20px", 600);

    const handleClick = (sport: string) => {
      setSelectedSport((prev) => (prev === sport ? null : sport));
    };

    return (
      <SportsContentStyle>
        <SportsList>
          {sportList.map((sport, index) => (
            <SportItem
              key={index}
              onClick={() => handleClick(sport.sportName)}
              isSelected={selectedSport === sport.sportName}
            >
              {sport.sportName}
              {selectedSport === sport.sportName && (
                <IconButton name="check" size={size} color="blue" />
              )}
            </SportItem>
          ))}
        </SportsList>
      </SportsContentStyle>
    );
  }
);

const SportsContentStyle = styled.div`
  width: 100%;
  height: 25vh;
  overflow-y: auto;
  position: relative;
  scrollbar-width: none;
  margin: 0;
  @media (min-width: 600px) {
    width: 600px;
    height: 250px;
  }
`;

const SportsList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1vh 8vw;
  @media (min-width: 600px) {
    padding: 10px 60px;
  }
`;

const SportItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isSelected"
})<{ isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  font-size: 4vw;
  padding: 4vw;
  cursor: pointer;
  border: ${({ isSelected }) => (isSelected ? "2px solid #0075FF" : "none")};
  border-radius: 20px;
  background-color: ${({ isSelected }) =>
    isSelected ? "rgba(0, 117, 255, 0.1)" : "transparent"};
  transition:
    background-color 0.3s,
    color 0.3s,
    font-weight 0.3s,
    border 0.3s;

  @media (min-width: 600px) {
    font-size: 18px;
    padding: 20px;
  }
`;

export default SportsContent;
