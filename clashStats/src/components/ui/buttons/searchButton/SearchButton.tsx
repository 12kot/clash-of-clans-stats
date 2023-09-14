import SearchSVG from "assets/svg/SearchSVG";
import SpinLoader from "components/loader/spinLoader/Loader";
import React from "react";
import styles from "./SearchButton.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  loading: boolean;
}

const SearchButton = ({loading, ...restProps }: Props) => {
  return (
    <button
      className={styles.button}
      {...restProps}
    >
      {loading ? <SpinLoader /> : <SearchSVG />}
    </button>
  );
};

export default SearchButton;
