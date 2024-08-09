import { styled } from "styled-components";

interface cardProp {
  onClick?: () => void;
  children: React.ReactNode;
}

const Card = ({ onClick, children }: cardProp) => {
  return <CardStyle onClick={onClick}>{children}</CardStyle>;
};

const CardStyle = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100px;
  margin: 5px auto;
  background-color: ${({ theme }) => theme.color.box};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  border: 1px solid ${({ theme }) => theme.color.border};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export default Card;
