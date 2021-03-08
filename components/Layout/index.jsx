import React from "react";
import Navbar from "../Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Head>
        <title>Simple next.js website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="next" />
        <meta name="description" content="next.js website" />
      </Head>

      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
