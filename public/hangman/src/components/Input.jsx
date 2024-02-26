import React, { useEffect } from "react";

function Input(props) {
  let index = Math.floor(Math.random() * props.data.length);
  let word = props.data[index];
  let arr_word = word.word.split("");
  const show = () => {
    let len = word.word.length;
    let str = "";
    for (let i = 0; i < len; i++) {
      str = str + `<div class="box"></div>`;
    }
    document.getElementById("id1").innerHTML = str;
  };
  const check = () => {
    let words = word.word.split("");
    words.forEach((item, i) => {
      if (props.char == item) {
        console.log(i);
      }
    });
  };
  useEffect(() => {
    show();
    check();
  }, []);

  return (
    <>
      <div className="container">
        <div className="d-flex flex-row" id="id1"></div>
        <div className="container mt-3 word">Hint: {word.hint}</div>
        <div className="container mt-2 guess">
          Incorrect Guesses: <span>0/6</span>
        </div>
      </div>
    </>
  );
}

export default Input;
