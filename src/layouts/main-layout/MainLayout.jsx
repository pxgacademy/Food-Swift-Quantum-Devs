import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../shared-components/header/Header";
import Footer from "../../shared-components/footer/Footer";
import Modal from "../../shared-components/modal/Modal";
import { useThemeStore } from "../../hooks/useThemeStore";


const MainLayout = () => {
  const { theme } = useThemeStore();

  return (
    <section data-theme={theme}>
      <Modal />
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};

export default MainLayout;
