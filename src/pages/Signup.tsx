import SignupForm from "@/components/signup/SignupForm";
import styled from "styled-components";

const Signup = () => {
  return (
    <Container>
      <SignupForm />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: calc(100vh - 136px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin: 0 auto;
  box-sizing: border-box;
  gap: 10px;
`;

export default Signup;
