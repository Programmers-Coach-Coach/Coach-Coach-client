import Icon from "@/components/Icon/Icon";
import { footerPicker, IFooterPickerData, TFooterPicker } from "@/data/modal";
import { useIsCoach } from "@/store/isCoach.store";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  schema: TFooterPicker;
  closeModal: () => void;
}

const FooterPicker = ({ schema, closeModal }: Props) => {
  const navigate = useNavigate();

  const setIsCoach = useIsCoach((state) => state.setIsCoach);
  const setIsModify = useIsCoach((state) => state.setIsModify);
  const setIsUser = useIsCoach((state) => state.setIsUser);

  return (
    <FooterPickerStyle>
      {footerPicker[schema].map((item, i) => (
        <Item
          item={item}
          key={i}
          onClick={() => {
            if (item.name === "내 루틴") {
              setIsCoach(false);
              setIsModify(true);
              setIsUser(false);
            }
            navigate(item.link);
            closeModal();
          }}
        />
      ))}
    </FooterPickerStyle>
  );
};

const FooterPickerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface itemProp {
  item: IFooterPickerData;
  onClick?: () => void;
}

const Item = ({ item, onClick }: itemProp) => {
  return (
    <ItemStyle onClick={onClick}>
      <Icon name={item.icon} size="30px" color="text" />
      {item.name}
    </ItemStyle>
  );
};

const ItemStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  padding: 10px 34px;
  cursor: pointer;

  /** todo: bold_body 공통 컴포넌트 제작 후 변경 */
  font-size: 16px;
  line-height: 32px;
  font-weight: bold;
`;
export default FooterPicker;
