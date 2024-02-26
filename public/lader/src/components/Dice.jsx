import "../style/dice.css";
import { useState } from "react";

function Dice(props) {
  const [image, setImage] = useState("../images/open.jpg");
  const images = [
    "../images/dice-six-faces-one.svg",
    "../images/dice-six-faces-two.svg",
    "../images/dice-six-faces-three.svg",
    "../images/dice-six-faces-four.svg",
    "../images/dice-six-faces-five.svg",
    "../images/dice-six-faces-six.svg",
  ];
  const fun = () => {
    let die = document.querySelector("#die-img");
    die.classList.add("move");
    let value = Math.floor(Math.random() * 6);
    setTimeout(() => {
      die.classList.remove("move");
      let data = images[value];
      die.src = `${data}`;
      setImage((prev) => `${data}`);
      setTimeout(() => {
        props.callToggle();
      }, 1500);
    }, 1000);
    props.logic(value + 1);
  };
  return (
    <>
      <div className={props.a == 1 ? "player2-container" : " die-container"}>
        <img
          src={image}
          width="150px"
          height="150px"
          alt=""
          srcSet=""
          onClick={() => fun()}
          id="die-img"
        />
      </div>
    </>
  );
}

export default Dice;
