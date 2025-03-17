import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../shared-components/header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
