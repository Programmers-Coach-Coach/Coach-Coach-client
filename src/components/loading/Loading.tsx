import { FadeLoader } from "react-spinners";
import styled from "styled-components";

interface Props {
  textDisabled?: boolean;
}
const Loading = ({ textDisabled }: Props) => {
  return (
    <Container>
      {!textDisabled && <h3>잠시만 기다려주세요.</h3>}
      <FadeLoader color="#5271FF" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 70vh;
`;

export default Loading;
