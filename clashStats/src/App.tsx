import React, { ReactElement, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "pages/layout/Layout";
const Main = lazy(() => import("pages/main/Main"));
const SearchClans = lazy(() => import("pages/search/SearchClans"));
const SearchPlayers = lazy(() => import("pages/search/SearchPlayers"));

const App = (): ReactElement => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/search/clan" element={<SearchClans />} />
          <Route path="/search/player" element={<SearchPlayers />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
