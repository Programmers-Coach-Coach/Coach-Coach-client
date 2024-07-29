import { footerPicker, TFooterPicker } from "./../../../../../data/modal";
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

const Item = ({ item }: { item: { name: string; link: string } }) => {
  return <ItemStyle>{item.name}</ItemStyle>;
};

const ItemStyle = styled.div`
  display: flex;
  gap: 22px;
  padding: 10px 34px;
  cursor: pointer;
`;
export default FooterPicker;
