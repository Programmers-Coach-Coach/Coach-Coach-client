import styled from "styled-components";

interface Props {
  count: number;
}
const NotificationBadge = ({ count }: Props) => {
  return <Wrapper>{count > 99 ? "99+" : count}</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  top: -8px;
  left: 14px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.background};
  border-radius: 6.25rem;

  font-size: 12px;

  padding: 0.25rem;
`;
export default NotificationBadge;
