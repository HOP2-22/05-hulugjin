import React, { createContext } from "react";
import { useState } from "react";

export const ColorModeContext = createContext();

function ThemeContext({ children }) {
  const [theme, setTheme] = useState("white");
  const SetColor = () => {
    setTheme("white");
  };
  const ColorModeHander = () => {
    setTheme("dark");
  };
  return (
    <ColorModeContext.Provider
      value={{
        theme: theme,
        changeTheme: ColorModeHander,
        colorChange: SetColor,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
}

export default ThemeContext;
