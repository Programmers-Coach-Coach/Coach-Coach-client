import Icon from "@/components/Icon/Icon";
import useQueryString from "@/hooks/useQueryString";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

interface FormInput {
  keyword: string;
}

const Search = ({ ...props }: Props) => {
  const [isIconFocus, setIsIconFocus] = useState(false);
  const { register, handleSubmit } = useForm<FormInput>();
  const { setKeyword } = useQueryString();

  const onSubmit = (data: FormInput) => {
    setKeyword(data.keyword);
  };

  return (
    <SearchStyle
      onSubmit={handleSubmit(onSubmit)}
      onFocus={() => setIsIconFocus(true)}
      onBlur={() => setIsIconFocus(false)}
    >
      <input {...register("keyword", { required: true })} {...props} />
      <button type="submit" className="search-button">
        <Icon
          name="search"
          color={isIconFocus ? "primary" : "text"}
          size="16px"
        />
      </button>
    </SearchStyle>
  );
};

const SearchStyle = styled.form`
  display: flex;
  position: relative;

  input {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.text};
    border-radius: ${({ theme }) => theme.borderRadius.default};
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
