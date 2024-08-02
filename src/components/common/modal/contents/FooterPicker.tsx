import Icon from "@/components/Icon/Icon";
import { footerPicker, IFooterPickerData, TFooterPicker } from "@/data/modal";
import styled from "styled-components";

interface Props {
  schema: TFooterPicker;
}

const FooterPicker = ({ schema }: Props) => {
  return (
    <FooterPickerStyle>
      {footerPicker[schema].map((item, i) => (
        <Item item={item} key={i} />
      ))}
    </FooterPickerStyle>
  );
};

const FooterPickerStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Item = ({ item }: { item: IFooterPickerData }) => {
  return (
    <ItemStyle>
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
