import { styled } from "styled-components";
import Profile from "../Profile";
import Empty from "@/components/common/Empty/Empty";
import { IMatchMembers } from "@/models/member.model";

interface MatchingProfileListProps {
  data: IMatchMembers[];
}

const MatchingProfileList = ({ data }: MatchingProfileListProps) => {
  return (
    <>
      {data.length ? (
        <MatchingProfileListStyle>
          {data.map(
            (d) =>
              d.isMatching && (
                <Profile
                  key={d.userId}
                  profileId={d.userId}
                  profileName={d.userName}
                  profileImageUrl={d.profileImageUrl}
                  state="MatchingMember"
                  width="80px"
                  height="80px"
                />
              )
          )}
        </MatchingProfileListStyle>
      ) : (
        <Empty
          name="coach"
          size="40px"
          color="text"
          descriptions="나의 코치가 없습니다"
        />
      )}
    </>
  );
};

const MatchingProfileListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  justify-items: center;
`;

export default MatchingProfileList;
