import React from "react";
import ThemeMode from "../../components/theme-mode/ThemeMode";

const Header = () => {
  return (
    <div className="text-center">
      <ThemeMode className="mt-10 cursor-pointer border rounded-full p-2" />
      <h2 className="text-xl mt-5">..... HEADER .....</h2>
    </div>
  );
};

export default Header;
