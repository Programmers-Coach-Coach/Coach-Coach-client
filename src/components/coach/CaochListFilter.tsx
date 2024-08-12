import { filterList, sportsList } from "@/data/sportsList";
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

  return (
    <CoachListFilterStyle>
      <Icon name="filter" size="20px" color="text" onClick={handleModal} />
      <Filter>
        {filterList.find((filter) => filterId === filter.id)?.name}
      </Filter>
      {sportsIdList.map((id) => (
        <Filter key={id}>
          {sportsList.find((sport) => sport.sportId === id)?.sportName}
        </Filter>
      ))}
      {isModal && (
        <Modal position="footer-above" closeModal={closeModal}>
          <FilterPicker
            filterId={filterId}
            sportsIdList={sportsIdList}
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
