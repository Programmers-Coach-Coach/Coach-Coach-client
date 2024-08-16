import Icon from "@/components/Icon/Icon";
import { ForwardedRef, forwardRef, useState } from "react";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Search = forwardRef(
  ({ ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const [isIconFocus, setIsIconFocus] = useState(false);

    return (
      <SearchStyle>
        <input {...props} ref={ref} />
        <button
          className="search-button"
          onFocus={() => {
            setIsIconFocus(true);
          }}
          onBlur={() => {
            setIsIconFocus(false);
          }}
        >
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
    transition: outline 0.1s ease-in-out;
  }

  input:focus {
    border: 1px solid ${({ theme }) => theme.color.primary};
    outline: 2px solid ${({ theme }) => theme.color.primary};
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
