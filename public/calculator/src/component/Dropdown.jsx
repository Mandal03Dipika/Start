const Dropdown = (props) => {
  const theme = {
    dark: {
      background_color: "black",
      border_color: "3px solid white",
      one: "white",
      height: "35px",
      shadow:
        "0px 3px 6px 0px rgba(248, 246, 246, 0.849), 0px 2px 4px 0px rgba(248, 246, 246, 0.849)",
    },
    light: {
      background_color: "white",
      border_color: "3px solid black",
      two: "black",
      height: "35px",
      shadow:
        "0px 3px 6px 0px rgba(0, 0, 0, 0.15), 0px 2px 4px 0px rgba(0, 0, 0, 0.12)",
    },
    classic: {
      background_color: "yellow",
    },
  };

  const lightMode = () => {
    document.getElementById("id1").style.background =
      theme.light.background_color;
    document.getElementById("id2").style.border = theme.light.border_color;
    document.getElementById("id3").style.background = theme.light.one;
    document.getElementById("id3").style.height = theme.light.height;
    document.getElementById("id4").style.height = theme.light.height;
    document.getElementById("id5").style.boxShadow = theme.light.shadow;
  };

  const darkMode = () => {
    document.getElementById("id1").style.background =
      theme.dark.background_color;
    document.getElementById("id2").style.border = theme.dark.border_color;
    document.getElementById("id3").style.background = theme.dark.one;
    document.getElementById("id3").style.height = theme.dark.height;
    document.getElementById("id4").style.height = theme.dark.height;
    document.getElementById("id5").style.boxShadow = theme.dark.shadow;
  };

  const classicMode = () => {
    document.getElementById("id1").style.background =
      theme.classic.background_color;
    console.log("Classic Mode");
  };

  return (
    <>
      <div className="dropdown">
        <div className="theme" id="id2">
          <div className="one" id="id3"></div>
          <div className="two" id="id4"></div>
        </div>
        <div className="dropdown-content">
          <a href="#" onClick={() => darkMode()}>
            Dark Mode
          </a>
          <a href="#" onClick={() => lightMode()}>
            Light Mode
          </a>
          <a href="#" onClick={() => classicMode()}>
            Classic Mode
          </a>
          <a href="#" onClick={() => darkMode()}>
            Modern Mode
          </a>
          <a href="#" onClick={() => lightMode()}>
            Default OS Mode
          </a>
        </div>
      </div>
    </>
  );
};
export default Dropdown;
