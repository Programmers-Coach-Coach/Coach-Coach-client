import { filterList, sportList } from "@/data/sportsList";
import useModal from "@/hooks/useModal";
import styled from "styled-components";
import Icon from "../Icon/Icon";
import Modal from "../common/modal/Modal";
import FilterPicker from "../common/modal/contents/FilterPicker";

interface Props {
  filterId: number;
  sportsIdList: number[];
  singleFilter: (id: number) => void;
  multiFilter: (id: number) => void;
}

const CoachListFilter = ({
  filterId,
  sportsIdList,
  singleFilter,
  multiFilter
}: Props) => {
  const { isModal, closeModal, handleModal } = useModal();

  // 종목 필터에 "전체" 추가한 배열
  const SPORT_LIST_WITH_TOTAL = [
    { sportId: 0, sportName: "전체" },
    ...sportList
  ];

  return (
    <CoachListFilterStyle>
      <Icon name="filter" size="18px" color="text" onClick={handleModal} />
      {/* 정렬 필터*/}
      <SortFilter>
        {filterList.find((filter) => filterId === filter.id)?.name}
      </SortFilter>
      {/* 종목 필터 */}
      <SportsFilter>
        {sportsIdList.map((id) => (
          <Filter key={id}>
            {
              SPORT_LIST_WITH_TOTAL.find((sport) => sport.sportId === id)
                ?.sportName
            }
            <Icon
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
            filterId={filterId}
            sportsIdList={sportsIdList}
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
export default CoachListFilter;
