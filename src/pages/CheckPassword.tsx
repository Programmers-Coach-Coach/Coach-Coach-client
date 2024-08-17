import styled from "styled-components";
import CheckPasswordForm from "@/components/checkpassword/CheckPasswordForm";

function CheckPassword() {
  return (
    <Container>
      <SubtitleWrapper>본인확인</SubtitleWrapper>
      <ContentWrapper>
        개인정보보호를 위해 본인확인을 진행합니다.
      </ContentWrapper>
      <CheckPasswordForm />
    </Container>
  );
}
const SubtitleWrapper = styled.div`
  font-size: ${({ theme }) => theme.titleSize.t1.fontSize};
  font-weight: ${({ theme }) => theme.titleSize.t1.bold};
`;
const ContentWrapper = styled.div`
  font-size: ${({ theme }) => theme.titleSize.t2.fontSize};
`;

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
  gap: 20px;
`;

export default CheckPassword;
