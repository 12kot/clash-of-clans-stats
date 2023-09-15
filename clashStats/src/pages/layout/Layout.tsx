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
      <footer className={styles.footer}>
        This material is unofficial and is not endorsed by Supercell. For more
        information see Supercell's Fan Content Policy:
        www.supercell.com/fan-content-policy.{" "}
      </footer>
    </>
  );
};

export default Layout;
