import styled from "styled-components";

interface Props {
  activeHours: string;
  reviewRating: number;
  memberCount: number;
}

const Summary = ({ activeHours, reviewRating, memberCount }: Props) => {
  return (
    <Wrapper>
      <Items>
        <span className="column">누적 회원수</span>
        <span className="data">{memberCount}</span>
      </Items>
      <Items>
        <span className="column">평점</span>
        <span className="data emphasize__data">{reviewRating.toFixed(1)}</span>
      </Items>
      <Items>
        <span className="column">문의 가능시간</span>
        <span className="data">{activeHours}</span>
      </Items>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  padding: 6px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  margin-top: 15px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 92px;
  height: 57px;

  .column {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.3px;
  }

  .data {
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.375px;
    color: #0075ff;
  }

  .emphasize__data {
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.3px;
    color: #ffc700;
  }
`;
export default Summary;
