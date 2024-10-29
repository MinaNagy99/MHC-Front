import React from "react";

function Layout({ children }) {
  return (
    <>
      <div>
        <img className="fixed top-4 left-4 " src="/images/logo.png" alt="" />
        <main>{children}</main>
        <footer>Footer content</footer>
      </div>
    </>
  );
}

export default Layout;
