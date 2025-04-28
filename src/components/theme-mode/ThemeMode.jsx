import PropTypes from "prop-types";

import useContextValue from "../../hooks/useContextValue";
import { useEffect } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";

const ThemeMode = ({ className = "" }) => {
  const { isDark, setIsDark } = useContextValue();

  // TODO: Added else

  useEffect(() => {
        setThemeMode();
  }, []);

  const setThemeMode = () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setIsDark(theme === "dark");
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.classList.add(theme);
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  const handleToggleTheme = () => {
    const theme = !isDark;
    setIsDark(theme);
    document.documentElement.setAttribute(
      "data-theme",
      theme ? "dark" : "light"
    );

    document.documentElement.classList.toggle("dark", theme);
    localStorage.setItem("theme", theme ? "dark" : "light");
  };

  return (
    <button onClick={handleToggleTheme} className={className}>
      {isDark ? <IoSunny /> : <BsFillMoonStarsFill />}
    </button>
  );
};

ThemeMode.propTypes = {
  className: PropTypes.string,
};

export default ThemeMode;
