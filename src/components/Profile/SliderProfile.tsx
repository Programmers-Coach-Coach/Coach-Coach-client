import styled from "styled-components";
import profile from "@/assets/images/profile.png";

interface SliderProfileProps {
  profileImageUrl: string;
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

const SliderProfile = ({
  profileImageUrl,
  name,
  isSelected,
  onClick
}: SliderProfileProps) => {
  const imageUrl = profileImageUrl ? profileImageUrl : profile;
  return (
    <SliderProfileStyle isSelected={isSelected} onClick={onClick}>
      <ProfileImageStyle src={imageUrl} alt="profile" />
      {name}
    </SliderProfileStyle>
  );
};

export default SliderProfile;

const SliderProfileStyle = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isSelected"
})<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  background-color: #252932;
  font-weight: bold;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  width: 25vw;
  height: 12vw;
  font-size: 3vw;
  border: ${({ isSelected }) => (isSelected ? "4px solid #0075FF" : "none")};

  @media (min-width: 600px) {
    width: 180px;
    height: 80px;
    font-size: 20px;
  }
`;

const ProfileImageStyle = styled.img`
  width: 8vw;
  height: 8vw;
  margin: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.default};

  @media (min-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;
