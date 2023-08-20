import React, { ReactElement, useEffect } from "react";
import "./App.css";
import Header from "components/header/Header";
import Main from "pages/main/Main";
import { getClanMembers } from "store/slices/ClanSlice";
import { useAppDispatch } from "hooks/store";

const App = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getClanMembers({ clanTag: "2QCRVUC99" }));
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
