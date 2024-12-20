import SvgIcon from "@/components/Icon/SvgIcon";
import { useLikePost, useUnLikePost } from "@/hooks/queries/useLikes";
import { MouseEvent, useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  id: number;
  checked: boolean;
  size: string;
}

const Heart = ({ id, checked, size }: Props) => {
  const [isChecked, setIsChecked] = useState(checked);
  const { mutate: mutateLike } = useLikePost(id);
  const { mutate: mutateUnlike } = useUnLikePost(id);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleHeart = async (e: MouseEvent, id: number) => {
    e.stopPropagation();
    if (isChecked) {
      mutateUnlike(id);
      setIsChecked(false);
    } else {
      mutateLike(id);
      setIsChecked(true);
    }
  };

  return (
    <HeartStyle>
      {isChecked ? (
        <SvgIcon
          width={size}
          height={size}
          name="heart"
          stroke="primary"
          fill="primary"
          onClick={(e) => handleHeart(e, id)}
        />
      ) : (
        <SvgIcon
          width={size}
          height={size}
          name="emptyHeart"
          stroke="primary"
          onClick={(e) => handleHeart(e, id)}
        />
      )}
    </HeartStyle>
  );
};

const HeartStyle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export default Heart;
