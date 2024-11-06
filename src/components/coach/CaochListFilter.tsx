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

  // const SPORT_LIST_WITH_TOTAL = [
  //   { sportId: 0, sportName: "전체" },
  //   ...sportList
  // ];

  return (
    <CoachListFilterStyle>
      <FilterBtn className="sorting__filter" onClick={handleModal}>
        필터
        <SvgIcon name="filter" />
      </FilterBtn>
      <FilterBtn className="sorting__sports" onClick={handleModal}>
        운동
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

const FilterBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 68px;
  height: 32px;

  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: -0.325px;
  background-color: #252932;
  border-radius: 5px;

  cursor: pointer;
`;

export default CoachListFilter;
