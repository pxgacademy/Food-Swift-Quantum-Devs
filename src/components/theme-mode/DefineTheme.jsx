import { THEMES } from "../../constants/themNames";
import { useThemeStore } from "../../hooks/useThemeStore";

const DefineTheme = () => {
  const { setTheme, theme } = useThemeStore();

  if (!theme)
    return (
      <div>
        <span>Loading...</span>
      </div>
    );

  return (
    <div>
      <select
        onChange={(e) => setTheme(e.target.value)}
        defaultValue={theme}
        className="select select-sm sm:select-md w-auto focus:outline-none "
      >
        {THEMES?.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DefineTheme;
