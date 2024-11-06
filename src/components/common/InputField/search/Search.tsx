import SvgIcon from "@/components/Icon/SvgIcon";
import useQueryString from "@/hooks/useQueryString";
import { useForm } from "react-hook-form";
import styled from "styled-components";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

interface FormInput {
  keyword: string;
}

const Search = ({ ...props }: Props) => {
  const { register, handleSubmit, setValue } = useForm<FormInput>();
  const { setKeyword } = useQueryString();

  const onSubmit = (data: FormInput) => {
    setKeyword(data.keyword);
  };

  const onDelete = () => {
    setValue("keyword", "");
    setKeyword("");
  };

  return (
    <SearchStyle>
      <input {...register("keyword")} {...props} />
      <SvgIcon
        name="search"
        width="22px"
        height="22px"
        stroke="#777C89"
        className="search__btn"
        onSubmit={handleSubmit(onSubmit)}
      />
      <SvgIcon
        name="xCircle"
        width="16px"
        height="16px"
        fill="#777C89"
        stroke="white"
        className="delete__btn"
        onClick={onDelete}
      />
    </SearchStyle>
  );
};

const SearchStyle = styled.form`
  display: flex;
  position: relative;

  input {
    width: 100%;
    padding: 20px 52px;
    border-radius: ${({ theme }) => theme.borderRadius.default};
    font-size: 14px;
    letter-spacing: -0.35px;
    line-height: 22px;
    color: rgba(119, 124, 137, 0.9333);
    background-color: #252932;
    border: none;
    outline: none;
  }

  .search__btn {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translate(0, -50%);
    cursor: pointer;
    outline: none;
  }

  .delete__btn {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translate(0, -50%);
    cursor: pointer;
    outline: none;
  }
`;

export default Search;
