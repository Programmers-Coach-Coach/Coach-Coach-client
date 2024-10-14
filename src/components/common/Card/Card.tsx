import { styled } from "styled-components";

interface cardProp {
  children: React.ReactNode;
}

const Card = ({ children }: cardProp) => {
  return <CardStyle>{children}</CardStyle>;
};

const CardStyle = styled.div`
  min-height: 80px;
  margin-top: 20px;
  margin-bottom: 10px;
  padding-top: 30px;
  padding-bottom: 20px;

  @media (max-width: 375px) {
    min-height: 50px;
    margin-top: 20px;
    margin-bottom: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  background-color: #3a3a3a;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export default Card;
