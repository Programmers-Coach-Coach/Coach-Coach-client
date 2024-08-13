import { filterList, sportList } from "@/data/sportsList";
import useCoachFilter from "@/hooks/useCoachFilter";
import useModal from "@/hooks/useModal";
import styled from "styled-components";
import Icon from "../Icon/Icon";
import Modal from "../common/modal/Modal";
import FilterPicker from "../common/modal/contents/FilterPicker";

const CoachListFilter = () => {
  const { isModal, closeModal, handleModal } = useModal();
  const { filterId, sportsIdList, singleFilter, multiFilter } =
    useCoachFilter();

  // 종목 필터에 "전체" 추가한 배열
  const SPORT_LIST_WITH_TOTAL = [
    { sportId: 0, sportName: "전체" },
    ...sportList
  ];

  return (
    <CoachListFilterStyle>
      <Icon name="filter" size="20px" color="text" onClick={handleModal} />
      {/* 정렬 필터*/}
      <Filter>
        {filterList.find((filter) => filterId === filter.id)?.name}
      </Filter>
      {/* 종목 필터 */}
      {sportsIdList.map((id) => (
        <Filter key={id}>
          {
            SPORT_LIST_WITH_TOTAL.find((sport) => sport.sportId === id)
              ?.sportName
          }
        </Filter>
      ))}
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
  gap: 10px;
  overflow: auto;
`;

const Filter = styled.button`
  flex-shrink: 0;
  font-size: 12px;
  padding: 0.25rem 1rem;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.background};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  border: 1px solid ${({ theme }) => theme.color.primary};
`;
export default CoachListFilter;
