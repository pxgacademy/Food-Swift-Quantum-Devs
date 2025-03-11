import PropTypes from "prop-types";

import useContextValue from "../../hooks/useContextValue";
import { useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";

const ThemeMode = ({ className = "" }) => {
  const { isDark, setIsDark } = useContextValue();

  useEffect(() => {
    const setThemeMode = () => {
      const theme = localStorage.getItem("theme");
      if (theme) {
        setIsDark(theme === "dark");
        document.documentElement.setAttribute("data-theme", theme);
        document.documentElement.classList.add(theme);
      }
    };

    return () => setThemeMode();
  }, []);

  const handleToggleTheme = () => {
    const theme = !isDark;
    setIsDark(theme);
    document.documentElement.setAttribute(
      "data-theme",
      theme ? "dark" : "light"
    );

    document.documentElement.classList.toggle("dark", theme);
    document.documentElement.classList.toggle("light", !theme);
    localStorage.setItem("theme", theme ? "dark" : "light");
  };

  return (
    <button onClick={handleToggleTheme} className={className}>
      {isDark ? <BsFillMoonStarsFill /> : <IoSunny />}
    </button>
  );
};

ThemeMode.propTypes = {
  className: PropTypes.string,
};

export default ThemeMode;
