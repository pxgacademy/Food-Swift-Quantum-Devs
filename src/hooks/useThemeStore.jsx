import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("loizar-theme") || "bumblebee",
  setTheme: (theme) => {
    localStorage.setItem("loizar-theme", theme);
    set({ theme });
  },
}));
