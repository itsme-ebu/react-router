import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";
import Footer from "./components/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
