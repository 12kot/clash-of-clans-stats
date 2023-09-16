import Header from "components/header/Header";
import SpinLoader from "components/loader/spinLoader/Loader";
import React, { ReactElement, Suspense } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import Footer from "components/footer/Footer";

const Layout = (): ReactElement => {
  return (
    <>
      <Header />
      <main className={styles.main}>
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
      <Footer />
    </>
  );
};

export default Layout;
