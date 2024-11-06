import { sportsList } from "@/data/sportsList";
import useModal from "@/hooks/useModal";
import styled from "styled-components";
import SvgIcon from "../Icon/SvgIcon";
import Modal from "../common/modal/Modal";
import OneButtonContent from "../common/modal/contents/OneButtonContent";
import FilterPicker from "../common/modal/contents/filterPicker/FilterPicker";

interface Props {
  singleFilter: (id: number) => void;
  multiFilter: (id: number) => void;
  reflectChangesToUrl: () => void;
  sort: string;
  idListSports: number[];
}

const CoachListFilter = ({
  singleFilter,
  multiFilter,
  reflectChangesToUrl,
  sort,
  idListSports
}: Props) => {
  const { isModal, closeModal, handleModal } = useModal();

  const sportNameFirst = sportsList.find(
    (value) => value.sportId === idListSports[0]
  )?.sportName;
  const len = idListSports.length - 1;
  const sportsText = sportNameFirst
    ? `${sportNameFirst}${len ? ` 외 ${len}` : ""}`
    : "운동";

  return (
    <CoachListFilterStyle>
      <FilterBtn className="sorting__filter" onClick={handleModal}>
        필터
        <SvgIcon name="filter" />
      </FilterBtn>
      <FilterBtn
        className="sorting__sports"
        onClick={handleModal}
        $isActive={!!sportNameFirst}
      >
        {sportsText}
        <SvgIcon name="arrow" stroke="#fff" width="16px" height="16px" />
      </FilterBtn>
      <FilterBtn className="sorting__gender">
        성별
        <SvgIcon name="arrow" stroke="#fff" width="16px" height="16px" />
      </FilterBtn>
      {isModal && (
        <Modal position="footer-above" closeModal={closeModal}>
          <OneButtonContent title="필터 설정" buttonText="필터 설정 완료">
            <FilterPicker
              singleFilter={singleFilter}
              multiFilter={multiFilter}
              reflectChangesToUrl={reflectChangesToUrl}
              closeModal={closeModal}
              sort={sort}
              idListSports={idListSports}
            />
          </OneButtonContent>
        </Modal>
      )}
    </CoachListFilterStyle>
  );
};

const CoachListFilterStyle = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;

  .sorting__sports {
    margin-left: auto;
  }
`;

const FilterBtn = styled.div<{ $isActive?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 6px 10px;

  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.325px;
  background-color: ${({ $isActive }) =>
    $isActive ? "rgba(0, 117, 255, 0.3)" : "#252932"};
  border-radius: 5px;
  border: 1px solid ${({ $isActive }) => ($isActive ? "#0075FF" : "none")};

  cursor: pointer;
`;

export default CoachListFilter;
