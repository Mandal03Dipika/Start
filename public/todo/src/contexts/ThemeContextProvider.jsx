import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
  theme: null,
  setTheme: () => {},
  light: () => {},
  dark: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const light = () => {
    setTheme("light");
    document.querySelector("html").style.background = "#fff";
  };
  const dark = () => {
    setTheme("dark");
    document.querySelector("html").style.background = "rgba(0,0,0,0.8)";
    // document.getElementById("id1").style.boxShadow = "0 20px 25px 25px #fff";
    // document.getElementById("id1").style.background =
    //   "rgba(166, 160, 160, 0.6)";
    // document.getElementById("id2").style.color = "rgba(0,0,0,0.8)";
    // document.getElementById("id3").style.color = "rgba(0,0,0,0.8)";
    // document.getElementById("id4").style.color = "rgba(0,0,0,0.8)";
    // document.getElementById("id5").style.color = "rgba(246, 85, 246, 1)";
    // document.getElementById("id6").style.color = "rgba(246, 85, 246, 1)";
    // document.getElementById("id7").style.color = "rgba(246, 85, 246, 1)";
    // document.getElementById("id8").onmouseover.style.boxShadow =
    //   "0px 0px 20px rgba(246, 85, 246, 1)";
    // document.getElementById("id9").onmouseover.style.boxShadow =
    //   "0px 0px 20px rgba(246, 85, 246, 1)";
    // document.getElementById("id10").onmouseover.style.boxShadow =
    //   "0px 0px 20px rgba(246, 85, 246, 1)";
  };
  return (
    <ThemeContext.Provider value={{ light, dark, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
