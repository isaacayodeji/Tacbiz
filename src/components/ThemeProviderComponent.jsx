/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect, useContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const defaultValue = {
  themeMode: "light",
  toggleTheme: () => {},
};

const ThemeContext = createContext(defaultValue);

export const useTheme = () => useContext(ThemeContext);

// Helper functions
const applyTheme = (theme) => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
};

export const ThemeProviderComponent = ( {children} ) => {
  const [themeMode, setThemeMode] = useState(() => {
    const osPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || osPreference;
  });

  useEffect(() => {
    // Apply the initial theme
    applyTheme(themeMode);

    // Listen for OS theme changes and always prioritize it
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = (event) => {
      const osTheme = event.matches ? "dark" : "light";
      setThemeMode(osTheme);
      applyTheme(osTheme);
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    // Listen for changes in localStorage (e.g., across tabs)
    const handleStorageChange = () => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme && storedTheme !== themeMode) {
        setThemeMode(storedTheme);
      }
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [themeMode]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#006F01",
      },
      mode: themeMode,
    },
    shadows: [
      "none", // 0 - No shadow
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
      "0px 1px 2px rgba(0, 0, 0, 0.3)",
    ],
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  });

  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    setThemeMode(newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
