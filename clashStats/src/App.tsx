import React, { ReactElement, useEffect } from "react";
import "./App.css";
import Header from "components/header/Header";
import Main from "pages/main/Main";
import { useAppDispatch } from "hooks/store";
import {
  getPopularClan,
  getPopularPlayer,
  getTopPlayer,
} from "store/slices/AppSlice";
import { Route, Routes } from "react-router-dom";
import Search from "pages/search/Search";

const App = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTopPlayer());
    dispatch(getPopularPlayer());
    dispatch(getPopularClan());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/search/:type/*" element={<Search />} />
      </Routes>
    </>
  );
};

export default App;
