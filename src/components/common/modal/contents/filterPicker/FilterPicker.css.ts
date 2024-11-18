import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

export const Text = styled.div`
  padding: 27px 11px;
  position: relative;

  h1 {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.375px;
    line-height: 26px;
    text-align: left;
  }

  p {
    font-size: 10px;
    font-weight: 300;
    letter-spacing: -0.55px;
    line-height: 26px;
    position: absolute;
    top: 20px;
    right: 0;
  }
`;

export const Filters = styled.div<{ $numColumns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $numColumns }) => $numColumns}, 1fr);
  gap: 13px;
  margin-bottom: 40px;

  .bold__font {
    font-weight: 700;
  }

  .medium__font {
    font-weight: 500;
  }
`;

export const FilterButton = styled.button<{
  $active: boolean;
  $isTotalSelector?: boolean;
}>`
  height: 40px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.35px;
  padding: 0.5rem;
  color: ${({ theme, $active }) =>
    $active
      ? theme.buttonVariant.contained.color
      : theme.buttonVariant.outlined.color};
  background-color: ${({ theme, $active }) =>
    $active
      ? theme.buttonVariant.contained.backgroundColor
      : theme.buttonVariant.outlined.backgroundColor};
  border: ${({ theme, $active }) =>
    $active
      ? theme.buttonVariant.contained.border
      : theme.buttonVariant.outlined.border};
  border-radius: 20px;

  ${({ theme, $active, $isTotalSelector }) =>
    $isTotalSelector &&
    css`
      grid-column: 1 / 5;
      background-color: ${$active
        ? theme.buttonVariant.contained.backgroundColor
        : "rgba(0, 117, 255, 0.2)"};
      border: 1px solid #0075ff;
      font-weight: 700;
    `}
`;

export const GenderSelectButton = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: -0.375px;
  color: #0075ff;

  svg {
    transform: rotate(270deg);
  }
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
