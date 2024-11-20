import DefaultTab from "@/components/tab/DefaultTab";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import MemberProfileList from "@/components/Profile/ProfileList/MemberProfileList";
import { useFetchAuth } from "@/hooks/useFetchAuth";
import { useMatchMember } from "@/hooks/useMember";
import Loading from "@/components/loading/Loading";
import useResponsiveIconSize from "@/hooks/useResponsiveIconSize";
import useModal from "@/hooks/useModal";
import Modal from "@/components/common/modal/Modal";
import OneButtonContent from "@/components/common/modal/contents/OneButtonContent";
import MemberFilterContent from "@/components/common/modal/contents/MemberFilterContent";
import SvgIcon from "@/components/Icon/SvgIcon";

const FILTER = ["트레이닝 시작일순", "회원 이름순"];

const MyMember = () => {
  const { data: authData, isLoading: authLoading, refetch } = useFetchAuth();
  const [tabValue, setTabValue] = useState<number>(0);
  const [isCoach, setIsCoach] = useState(false);
  const [filterIndex, setFilterIndex] = useState<number>(0);
  const filterModal = useModal();
  const iconSize = useResponsiveIconSize("3vw", "14px", 600);

  const { data = [], isLoading: memberLoading } = useMatchMember(isCoach);

  useEffect(() => {
    refetch().then(() => {
      setIsCoach(authData?.isCoach || false);
    });
  }, [authData, refetch]);

  if (authLoading || memberLoading) return <Loading />;

  const matchData = data.filter((d) => d.isMatching === true);
  const inquiryData = data.filter((d) => d.isMatching === false);

  const handleTabChange = (newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <>
      {filterModal.isModal && (
        <Modal closeModal={filterModal.closeModal} position="footer-above">
          <OneButtonContent title="회원 정렬" buttonText="선택완료">
            <MemberFilterContent
              filterList={FILTER}
              selectIndex={filterIndex}
              setFilterIndex={setFilterIndex}
              closeModal={filterModal.closeModal}
            />
          </OneButtonContent>
        </Modal>
      )}
      <MyMemberStyle>
        <DefaultTab
          value={tabValue}
          labels={["내 회원", "매칭 대기 회원"]}
          onTabChange={handleTabChange}
        />
        {tabValue === 0 && (
          <FilterStyle onClick={() => filterModal.openModal()}>
            {FILTER[filterIndex]}
            <SvgIcon
              name="arrow"
              width={iconSize}
              height={iconSize}
              fill="gray3"
            />{" "}
          </FilterStyle>
        )}
        {tabValue === 0 ? (
          <MemberProfileList data={matchData} />
        ) : (
          <MemberProfileList data={inquiryData} />
        )}
      </MyMemberStyle>
    </>
  );
};

const MyMemberStyle = styled.div``;

const FilterStyle = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
  cursor: pointer;
  color: #cacaca;
  font-size: 3vw;
  padding: 2.5vw;
  @media (min-width: 600px) {
    font-size: 14px;
    padding: 10px;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 1%;
    width: 98%;
    height: 0.08rem;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

export default MyMember;
