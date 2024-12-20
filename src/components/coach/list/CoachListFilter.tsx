import SvgIcon from "@/components/Icon/SvgIcon";
import Modal from "@/components/common/modal/Modal";
import OneButtonContent from "@/components/common/modal/contents/OneButtonContent";
import FilterPicker from "@/components/common/modal/contents/filter/CoachListFilter";
import GenderRadio from "@/components/common/modal/contents/filter/GenderRadio";
import useCoachFilter from "@/hooks/useCoachFilter";
import useModal from "@/hooks/useModal";
import styled from "styled-components";

const CoachListFilter = () => {
  const {
    isModal: isFilterModal,
    closeModal: closeFilterModal,
    handleModal: handleFilterModal
  } = useModal();
  const {
    isModal: isGenderModal,
    openModal: openGenderModal,
    closeModal: closeGenderModal,
    handleModal: handleGenderModal
  } = useModal();

  const {
    getSportsText,
    getGenderText,
    isSportFilterApplied,
    isGenderApplied
  } = useCoachFilter();

  const changeModal = () => {
    closeFilterModal();
    openGenderModal();
  };

  return (
    <CoachListFilterStyle>
      <FilterBtn className="sorting__filter" onClick={handleFilterModal}>
        필터
        <SvgIcon name="filter" />
      </FilterBtn>
      <FilterBtn
        className="sorting__sports"
        onClick={handleFilterModal}
        $isActive={isSportFilterApplied}
      >
        {getSportsText()}
        <SvgIcon name="arrow" stroke="#fff" width="16px" height="16px" />
      </FilterBtn>
      <FilterBtn
        className="sorting__gender"
        onClick={handleGenderModal}
        $isActive={isGenderApplied}
      >
        {getGenderText()}
        <SvgIcon name="arrow" stroke="#fff" width="16px" height="16px" />
      </FilterBtn>
      {isFilterModal && (
        <Modal position="footer-above" closeModal={closeFilterModal}>
          <OneButtonContent
            title="필터 설정"
            buttonText="필터 설정 완료"
            onClose={closeFilterModal}
          >
            <FilterPicker
              closeModal={closeFilterModal}
              changeModal={changeModal}
            />
          </OneButtonContent>
        </Modal>
      )}
      {isGenderModal && (
        <Modal position="footer-above" closeModal={closeGenderModal}>
          <GenderRadio onClose={closeGenderModal} />
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
