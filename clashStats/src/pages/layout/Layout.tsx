import Header from "components/header/Header";
import SpinLoader from "components/loader/spinLoader/Loader";
import React, { ReactElement, Suspense } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

const Layout = (): ReactElement => {
  return (
    <>
      <Header />
      <main>
        <Suspense
          fallback={
            <div className={styles.loader}>
              <SpinLoader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
