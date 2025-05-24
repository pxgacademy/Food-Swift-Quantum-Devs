import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import { useThemeStore } from "../../stores/useThemeStore";
import Footer from "../../components/footer/Footer";

const MainLayout: React.FC = () => {
  const { theme } = useThemeStore();

  return (
    <section data-theme={theme} className="min-h-screen">
      <Header />
      <Outlet />
      <Footer/>
    </section>
  );
};

export default MainLayout;
