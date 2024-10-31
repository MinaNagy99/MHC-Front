import React from "react";

import Footer from "./components/shared/Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <div>
        <img className="fixed top-4 left-3" src="/images/logo.png" alt="" />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
