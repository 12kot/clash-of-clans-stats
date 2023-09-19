import SpinLoader from "components/loader/spinLoader/Loader";
import React, { ReactElement, Suspense } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import Footer from "layouts/footer/Footer";
import Header from "layouts/header/Header";

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
