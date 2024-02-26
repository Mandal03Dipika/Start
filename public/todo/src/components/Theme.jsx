import React, { useEffect } from "react";
import { useThemeContext } from "../contexts/ThemeContextProvider";

function Theme() {
  const { dark, light, theme } = useThemeContext();
  //   useEffect(() => {
  //     document.querySelector("html").classList.remove("dark", "light");
  //     document.querySelector("html").classList.add(theme);
  //   }, [theme]);
  return (
    <>
      <div className="dropdown">
        <button className="dropdown-toggle" data-toggle="dropdown">
          Theme
        </button>
        <ul className="dropdown-menu dropdown-menu-dark move1">
          <li>
            <button className="dropdown-item" onClick={dark}>
              Dark Mode
            </button>
          </li>
          <li>
            <button className="dropdown-item" onClick={light}>
              Light Mode
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Theme;
