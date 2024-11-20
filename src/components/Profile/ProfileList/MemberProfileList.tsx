import { styled } from "styled-components";
import Empty from "@/components/common/Empty/Empty";
import { IGetMyMember } from "@/models/member.model";
import MemberProfile from "../MemberProfile";

interface MatchingProfileListProps {
  data: IGetMyMember[];
}

const MemberProfileList = ({ data }: MatchingProfileListProps) => {
  return (
    <>
      {data.length ? (
        <MemberProfileListStyle>
          {data.map((d) => (
            <MemberProfile key={d.userId} member={d} />
          ))}
        </MemberProfileListStyle>
      ) : (
        <Empty
          name="twins"
          size="80px"
          color="gray3"
          descriptions="나의 회원이 없습니다"
          padding="10px"
        />
      )}
    </>
  );
};

const MemberProfileListStyle = styled.div`
  justify-items: center;
`;

export default MemberProfileList;
