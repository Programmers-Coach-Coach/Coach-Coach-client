import CustomButton from "@/components/common/Button/CustomButton";
import { useContact } from "@/hooks/queries/useContact";
import toast from "react-hot-toast";
import styled from "styled-components";

interface Props {
  coachId: number;
  chattingUrl: string;
  matchButtonDisabled: boolean;
}

const MatchButtons = ({ coachId, chattingUrl, matchButtonDisabled }: Props) => {
  const { mutate } = useContact();

  const handleKaKaoLink = () => {
    if (chattingUrl) {
      window.open(chattingUrl, "_blank");
    } else {
      toast.error("코치가 카카오톡 링크를 등록하지 않았습니다");
    }
  };

  const handleRequestMatch = () => {
    mutate(coachId);
  };

  return (
    <Wrapper>
      <CustomButton
        size="full-sharp"
        variant="outlined"
        onClick={handleKaKaoLink}
      >
        카카오톡 문의하기
      </CustomButton>
      <CustomButton
        size="full-sharp"
        variant="contained"
        onClick={handleRequestMatch}
        disabled={matchButtonDisabled}
      >
        {matchButtonDisabled ? "신청완료" : "코치님께 매칭 신청하기"}
      </CustomButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 16px 0 20px;
  font-size: 12px;

  button {
    flex: 1;
    font-size: 12px;

    &:disabled {
      background-color: #0075ff;
      color: #fff;
    }
  }
`;

export default MatchButtons;
