import { forwardRef, useImperativeHandle } from "react";
import { Inner, Section, Text, Wrapper } from "./FilterPicker.css";
import GenderFilter from "./GenderFilter";
import SortFilterList from "./SortFilterList";
import SportsFilterList from "./SportsFilterList";

interface Props {
  singleFilter: (id: number) => void;
  multiFilter: (id: number) => void;
  reflectChangesToUrl: () => void;
  closeModal: () => void;
  sort: string;
  idListSports: number[];
}

interface ChildComponentHandle {
  childFunction: () => void;
}

const FilterPicker = forwardRef<ChildComponentHandle, Props>(
  (
    {
      singleFilter,
      multiFilter,
      reflectChangesToUrl,
      closeModal,
      sort,
      idListSports
    },
    ref
  ) => {
    // 부모 컴포넌트에서 접근할 수 있는 함수 정의
    useImperativeHandle(ref, () => ({
      childFunction() {
        reflectChangesToUrl();
        closeModal();
      }
    }));

    return (
      <Wrapper>
        <Section>
          <Text>
            <h1>정렬</h1>
            <p>∙ 한 개만 선택할 수 있어요</p>
          </Text>
          <SortFilterList singleFilter={singleFilter} sort={sort} />
        </Section>
        <Section>
          <Text>
            <h1>종목</h1>
            <p>∙ 여러 개 선택할 수 있어요</p>
          </Text>
          <SportsFilterList
            multiFilter={multiFilter}
            idListSports={idListSports}
          />
        </Section>
        <Section>
          <Inner>
            <Text>
              <h1>성별</h1>
            </Text>
            <GenderFilter />
          </Inner>
        </Section>
      </Wrapper>
    );
  }
);

export default FilterPicker;
