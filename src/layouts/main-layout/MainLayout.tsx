import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import { useThemeStore } from "../../hooks/useThemeStore";

const MainLayout: React.FC = () => {
  const { theme } = useThemeStore();

  return (
    <section data-theme={theme} className="min-h-screen">
      <Header />
      <Outlet />
    </section>
  );
};

export default MainLayout;
