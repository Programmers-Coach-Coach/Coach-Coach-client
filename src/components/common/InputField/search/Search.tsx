import Icon from "@/components/Icon/Icon";
import { ForwardedRef, forwardRef, useState } from "react";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Search = forwardRef(
  ({ ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const [isIconFocus, setIsIconFocus] = useState(false);

    return (
      <SearchStyle
        onFocus={() => setIsIconFocus(true)}
        onBlur={() => setIsIconFocus(false)}
      >
        <input {...props} ref={ref} />
        <button className="search-button">
          <Icon
            name="search"
            color={isIconFocus ? "primary" : "text"}
            size="16px"
          />
        </button>
      </SearchStyle>
    );
  }
);

const SearchStyle = styled.div`
  display: flex;
  position: relative;

  input {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.text};
    border-radius: 4px;
    padding: 12px 30px 12px 20px;
    outline: none;
    transition:
      border 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out;

    &:focus {
      border-color: ${({ theme }) => theme.color.primary};
      box-shadow: 0 0 0 1px ${({ theme }) => theme.color.primary};
    }
  }

  .search-button {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translate(0, -50%);
    cursor: pointer;
    outline: none;
  }
`;

export default Search;
