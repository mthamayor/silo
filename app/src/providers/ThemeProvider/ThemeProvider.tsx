import { useEffect, useState } from "react";
import { DarkTheme, LightTheme, Theme } from "./colors";
import constate from "constate";
import * as localStorage from "local-storage";
import { LocalStorageKeys } from "../../util/localStorage";

function getIsDarkMode(theme: Theme): boolean {
  if (theme === Theme.SYSTEM) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return theme === Theme.DARK;
}

function useThemeProvider() {
  const [themeInState, setThemeInState] = useState<Theme>(
    localStorage.get<Theme>(LocalStorageKeys.THEME) ?? Theme.LIGHT
  );
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    getIsDarkMode(themeInState)
  );

  const setTheme = (theme: Theme) => {
    setThemeInState(theme);
    localStorage.set(LocalStorageKeys.THEME, theme);
  };

  useEffect(() => {
    function handleThemeChange(e: MediaQueryListEvent) {
      setIsDarkMode(e.matches);
    }

    setIsDarkMode(getIsDarkMode(themeInState));

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleThemeChange);

    return window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", handleThemeChange);
  }, [themeInState]);

  return {
    theme: themeInState,
    themeColors: isDarkMode ? DarkTheme : LightTheme,
    isDarkMode,
    setTheme,
  };
}

export const [
  ThemeProvider,
  useTheme,
  useThemeColors,
  useDarkMode,
  useSetTheme,
] = constate(
  useThemeProvider,
  (value) => value.theme,
  (value) => value.themeColors,
  (value) => value.isDarkMode,
  (value) => value.setTheme
);
