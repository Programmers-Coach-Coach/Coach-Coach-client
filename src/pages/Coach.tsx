import CustomButton from "@/components/common/Button/CustomButton";
import Icon from "@/components/Icon/Icon";
import Loading from "@/components/loading/Loading";
import useCoachDetail from "@/hooks/queries/useCoachDetail";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Coach = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isError, isLoading } = useCoachDetail(Number(id));

  if (isLoading) return <Loading />;
  if (isError || !data) {
    return <div>무언가 잘못됨</div>;
  }

  return (
    <Wrapper>
      <BasicWrapper>
        <Image src={data.profileImageUrl || undefined} alt="" />
        <CoachInfo>
          <div>
            <h1>{data.coachName}</h1>
            <Icons>
              <IconWrapper>
                <Icon name="star" size="16px" color="review" />
                {data.reviewRating} ({data.countOfReviews})
              </IconWrapper>
              <IconWrapper>
                <Icon name="heart" size="16px" color="review" />(
                {data.countOfLikes})
              </IconWrapper>
            </Icons>
          </div>

          <SmallText>문의 가능 시간: {data.activeHours}</SmallText>
        </CoachInfo>
      </BasicWrapper>
      <CustomButton size="full-sharp" variant="contained">
        문의하기
      </CustomButton>
      <SubWrapper>
        <h2>종목</h2>
        <CaochingSports>
          {data.coachingSports.map((sport, i) => (
            <li key={i}>#{sport}</li>
          ))}
        </CaochingSports>
      </SubWrapper>
      <SubWrapper>
        <h2>자기소개</h2>
        <TextField>{data.coachIntroduction}</TextField>
      </SubWrapper>
      <SubWrapper>
        <h2>활동중인 센터</h2>
        <TextField>
          {data.activeCenter} {data.activeCenterDetail}
        </TextField>
      </SubWrapper>
      <SubWrapper>
        <h2>주소</h2>
        <TextField> {data.localAddress}</TextField>
      </SubWrapper>
      {/* TODO: 문의하기 페이지에서 오픈 카카오톡 링크로 이동할 수 있게함 */}
      {/* <SubWrapper>
        <h2>오픈 카카오톡 링크</h2>
        <CustomButton variant="outlined" size="small" onClick={() => {}}>
          kakaotalk
        </CustomButton>
      </SubWrapper> */}
      <SubWrapper>
        <h2>리뷰</h2>
      </SubWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Image = styled.img`
  width: 114px;
  height: 114px;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  object-fit: cover;
`;

const SmallText = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.color.gray3};
`;
const BasicWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const CoachInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
`;
const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 4px;
`;
const Icons = styled.div`
  display: flex;
  gap: 4px;
  font-size: 12px;
`;

const TextField = styled.div`
  line-height: 1.5;
  word-break: keep-all;
`;

const CaochingSports = styled.ul`
  display: flex;
  align-items: center;
  gap: 9px;
  li {
    display: inline-flex;
    font-size: 12px;
    padding: 4px 6px;
    border-radius: ${({ theme }) => theme.borderRadius.default};
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.gray1};
  }
`;

export default Coach;
