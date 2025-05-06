import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("loizar-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("loizar-theme", theme);
    set({ theme });
  },
}));
