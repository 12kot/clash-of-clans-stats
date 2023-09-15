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
import SearchClans from "pages/search/SearchClans";
import SearchPlayers from "pages/search/SearchPlayers";

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
        <Route path="/search/clan" element={<SearchClans />} />
        <Route path="/search/player" element={<SearchPlayers />} />
      </Routes>
    </>
  );
};

export default App;
