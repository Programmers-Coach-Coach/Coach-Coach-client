import { filterList, sportList } from "@/data/sportsList";
import useModal from "@/hooks/useModal";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import IconButton from "../Icon/IconButton";
import Modal from "../common/modal/Modal";
import FilterPicker from "../common/modal/contents/FilterPicker";

interface Props {
  singleFilter: (id: number) => void;
  multiFilter: (id: number) => void;
}

const CoachListFilter = ({ singleFilter, multiFilter }: Props) => {
  const { isModal, closeModal, handleModal } = useModal();

  // 종목 필터에 "전체" 추가한 배열
  const SPORT_LIST_WITH_TOTAL = [
    { sportId: 0, sportName: "전체" },
    ...sportList
  ];

  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort") ?? "latest";

  const sportsIds = searchParams.get("sportsIds")?.split(",").map(Number) ?? [];

  return (
    <CoachListFilterStyle>
      <SortingFilter onClick={handleModal}>
        <IconButton name="filter" size="18px" color="text" />
        {/* 정렬 필터*/}
        <SortFilter>
          {filterList.find((filter) => sort === filter.parameter)?.name}
        </SortFilter>
      </SortingFilter>

      {/* 종목 필터 */}
      <SportsFilter>
        {sportsIds.map((id) => (
          <Filter key={id}>
            {
              SPORT_LIST_WITH_TOTAL.find((sport) => sport.sportId === id)
                ?.sportName
            }
            <IconButton
              name="x"
              size="14px"
              color="primary"
              onClick={() => multiFilter(id)}
            />
          </Filter>
        ))}
      </SportsFilter>
      {isModal && (
        <Modal position="footer-above" closeModal={closeModal}>
          <FilterPicker
            sportListWithTotal={SPORT_LIST_WITH_TOTAL}
            singleFilter={singleFilter}
            multiFilter={multiFilter}
          />
        </Modal>
      )}
    </CoachListFilterStyle>
  );
};

const CoachListFilterStyle = styled.div`
  display: flex;
  overflow: auto;
  padding: 0.5rem 0;
`;

const SortFilter = styled.button`
  flex-shrink: 0;
  font-size: 12px;
  margin: 0 10px 0 4px;
`;

const SportsFilter = styled.div`
  display: flex;
  gap: 10px;
`;

const Filter = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  font-size: 12px;
  padding: 0.25rem 0.5rem 0.25rem 1rem;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.background};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  border: 1px solid ${({ theme }) => theme.color.primary};
`;

const SortingFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;
export default CoachListFilter;
