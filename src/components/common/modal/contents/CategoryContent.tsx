import { styled } from "styled-components";
import InputInModal from "../../InputField/Text/InputInModal";
import { useModalInfo } from "@/store/modalInfo.store";

const CategoryContent = () => {
  const categoryName = useModalInfo((state) => state.categoryName);
  const setCategoryName = useModalInfo((state) => state.setCategoryName);

  return (
    <CategoryContentStyle>
      <h2>카테고리명</h2>
      <InputInModal
        name={categoryName}
        content="종목"
        setFn={setCategoryName}
      />
    </CategoryContentStyle>
  );
};

const CategoryContentStyle = styled.div`
  width: 100%;
  height: 100%;
  h2 {
    padding: 10px;
  }
`;

export default CategoryContent;
