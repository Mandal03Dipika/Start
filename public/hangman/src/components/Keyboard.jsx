import React, { useState } from "react";
import { useEffect } from "react";
import WinModal from "./WinModal";
import LooseModal from "./LooseModal";
import Timer from "./Timer";

function Keyboard(props) {
  const [wrong, setWrong] = useState(0);
  const [words, setWords] = useState([]);
  const [hint, setHint] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [i, setI] = useState(0);
  const [correct, setCorrect] = useState(0);
  useEffect(() => {
    const index = Math.floor(Math.random() * props.data.length);
    setWords((prev) => props.data[index].word.split(""));
    setHint((prev) => props.data[index].hint);
    setIsLoading(false);
  }, []);
  const image = [
    "../images/hangman-1.svg",
    "../images/hangman-2.svg",
    "../images/hangman-3.svg",
    "../images/hangman-4.svg",
    "../images/hangman-5.svg",
    "../images/hangman-6.svg",
  ];
  const changeImgSrc = () => {
    const img = document.getElementById("image");
    let currentImage = image[i];
    img.src = `${currentImage}`;
    setI(i + 1);
  };
  const set = (char, j) => {
    let flag = 0;
    let inside = 0;
    let btn = document.querySelectorAll("button");
    words.forEach((item, i) => {
      if (char == item) {
        document.getElementsByClassName("box")[i].textContent = char;
        document.getElementsByClassName("box")[i].classList.add("change");
        btn[j].classList.remove("btn-info");
        btn[j].classList.add("disable");
        inside = 1;
        setCorrect((prev) => prev + 1);
        console.log("done");
      } else {
        flag = 1;
        btn[j].classList.remove("btn-info");
        btn[j].classList.add("disable");
      }
    });
    if (flag == 1 && inside != 1) {
      changeImgSrc();
      setWrong(wrong + 1);
    }
  };
  return (
    <>
      <Timer word={words} />
      <div className="game">
        <div className="word" id="id1">
          {isLoading ? (
            <div>Loading</div>
          ) : (
            words.map((item, i) => <div className="box" key={i}></div>)
          )}
        </div>
        <h4>
          Hint: <b>{hint}</b>
        </h4>
        <h4>
          Incorrect Guesses: <span>{wrong}/6</span>
        </h4>
      </div>
      <div className="keys">
        <div className="container upper">
          <button className="btn btn-info mx-1" onClick={() => set("Q", 0)}>
            Q
          </button>
          <button className="btn btn-info  mx-1" onClick={() => set("W", 1)}>
            W
          </button>
          <button className="btn btn-info  mx-1" onClick={() => set("E", 2)}>
            E
          </button>
          <button className="btn btn-info  mx-1" onClick={() => set("R", 3)}>
            R
          </button>
          <button className="btn btn-info  mx-1" onClick={() => set("T", 4)}>
            T
          </button>
          <button className="btn btn-info  mx-1" onClick={() => set("Y", 5)}>
            Y
          </button>
          <button className="btn btn-info  mx-1" onClick={() => set("U", 6)}>
            U
          </button>
          <button className="btn btn-info  mx-1" onClick={() => set("I", 7)}>
            I
          </button>
          <button className="btn btn-info  mx-1" onClick={() => set("O", 8)}>
            O
          </button>
          <button className="btn btn-info  mx-1" onClick={() => set("P", 9)}>
            P
          </button>
        </div>
        <div className="container mx-4 my-2 upper">
          <button className="btn btn-info  mx-1" onClick={() => set("A", 10)}>
            A
          </button>
          <button className="btn btn-info  mx-1" onClick={() => set("S", 11)}>
            S
          </button>
          <button className="btn btn-info  mx-1" onClick={() => set("D", 12)}>
            D
          </button>
          <button className="btn btn-info  mx-1" onClick={() => set("F", 13)}>
            F
          </button>
          <button className="btn btn-info mx-1" onClick={() => set("G", 14)}>
            G
          </button>
          <button className="btn btn-info mx-1" onClick={() => set("H", 15)}>
            H
          </button>
          <button className="btn btn-info mx-1" onClick={() => set("J", 16)}>
            J
          </button>
          <button className="btn btn-info mx-1" onClick={() => set("K", 17)}>
            K
          </button>
          <button className="btn btn-info mx-1" onClick={() => set("L", 18)}>
            L
          </button>
        </div>
        <div className="container mx-5 upper">
          <button className="btn btn-info mx-1" onClick={() => set("Z", 19)}>
            Z
          </button>
          <button className="btn btn-info mx-1" onClick={() => set("X", 20)}>
            X
          </button>
          <button className="btn btn-info mx-1" onClick={() => set("C", 21)}>
            C
          </button>
          <button className="btn btn-info mx-1" onClick={() => set("V", 22)}>
            V
          </button>
          <button className="btn btn-info mx-1" onClick={() => set("B", 23)}>
            B
          </button>
          <button className="btn btn-info mx-1" onClick={() => set("N", 24)}>
            N
          </button>
          <button className="btn btn-info mx-1" onClick={() => set("M", 25)}>
            M
          </button>
        </div>
      </div>
      {i > 5 ? (
        <>
          <LooseModal word={words} />
        </>
      ) : (
        console.log("Still Working")
      )}
      {correct == words.length ? (
        <>
          <WinModal />
        </>
      ) : (
        console.log(correct + " correct " + words.length + " length")
      )}
    </>
  );
}

export default Keyboard;
