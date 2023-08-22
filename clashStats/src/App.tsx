import React, { ReactElement, useEffect } from "react";
import "./App.css";
import Header from "components/header/Header";
import Main from "pages/main/Main";
import { useAppDispatch } from "hooks/store";
import { getTopPlayers } from "store/slices/AppSlice";

const App = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTopPlayers());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
