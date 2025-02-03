import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

export const ThemeContext = createContext<ThemeContextProps | null>(null);

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const UseTheme = () => {
  return useContext(ThemeContext);
};
