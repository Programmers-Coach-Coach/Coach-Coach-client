import styled from "styled-components";

const LineChart = () => {
  return (
    <Wrapper>
      <h1>LineChart body</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 140px;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;
export default LineChart;
