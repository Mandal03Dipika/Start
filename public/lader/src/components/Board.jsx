import "../style/board.css";
import { useEffect, useState } from "react";
import Dice from "./Dice";
import Win from "./Win";

function Board() {
  const [toggle, setToggle] = useState(1);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [player1Sum, setPlayer1Sum] = useState(0);
  const [player2Sum, setPlayer2Sum] = useState(0);
  const [win, setWin] = useState(0);
  let a,
    x = 0;
  const callToggle = () => {
    if (toggle) {
      setToggle(0);
    } else {
      setToggle(1);
    }
  };
  const jump = (sum, num) => {
    if (num == 4) {
      a = 25;
      x = 1;
    } else if (num == 13) {
      a = 46;
      x = 1;
    } else if (num == 33) {
      a = 49;
      x = 1;
    } else if (num == 50) {
      a = 69;
      x = 1;
    } else if (num == 42) {
      a = 63;
      x = 1;
    } else if (num == 62) {
      a = 81;
      x = 1;
    } else if (num == 74) {
      a = 92;
      x = 1;
    } else if (num == 40) {
      a = 3;
      x = 1;
    } else if (num == 27) {
      a = 5;
      x = 1;
    } else if (num == 43) {
      a = 18;
      x = 1;
    } else if (num == 54) {
      a = 31;
      x = 1;
    } else if (num == 66) {
      a = 45;
      x = 1;
    } else if (num == 76) {
      a = 58;
      x = 1;
    } else if (num == 99) {
      a = 41;
      x = 1;
    } else if (num == 89) {
      a = 53;
      x = 1;
    } else if (sum == "player1Sum") {
      if (player1Sum > 100) {
        a = player1Sum - num;
        x = 1;
      } else if (player2Sum > 100) {
        a = player2Sum - num;
        x = 1;
      }
    }
    if (x == 1) {
      if (sum == "player1Sum") {
        setPlayer1Sum((prev) => a);
      } else {
        setPlayer2Sum((prev) => a);
      }
    }
    x = 0;
  };
  const calculate = (player, num) => {
    if (player == 1) {
      if (player1Sum == 100) {
        console.log("Winner Player 1");
        setWin(1);
      } else {
        setPlayer1Sum((prev) => prev + num);
      }
    } else {
      if (player2Sum == 100) {
        console.log("Winner Player 2");
        setWin(1);
      } else {
        setPlayer2Sum((prev) => prev + num);
      }
    }
  };
  const changeAnimation1 = () => {
    if (player1Sum != 0) {
      document.querySelectorAll(".box").forEach((element) => {
        if (element.classList.contains("player1")) {
          element.classList.remove("player1");
        }
      });
      jump("player1Sum", player1Sum);
      document.getElementById("b" + player1Sum).classList.add("player1");
    }
  };
  const changeAnimation2 = () => {
    if (player2Sum != 0) {
      document.querySelectorAll(".box").forEach((element) => {
        if (element.classList.contains("player2")) {
          element.classList.remove("player2");
        }
      });
      jump("player2Sum", player2Sum);
      document.getElementById("b" + player2Sum).classList.add("player2");
    }
  };
  useEffect(() => {
    changeAnimation1();
  }, [player1Sum]);
  useEffect(() => {
    changeAnimation2();
  }, [player2Sum]);
  const logic = (value) => {
    if (value == 1) {
      if (toggle && !first) {
        document.getElementById("b1").classList.add("player1");
        document.getElementById("p1").remove();
        setFirst(1);
        setPlayer1Sum(1);
      } else if (!toggle && !second) {
        document.getElementById("b1").classList.add("player2");
        document.getElementById("p2").remove();
        setSecond(1);
        setPlayer2Sum(1);
      }
    }
    if (first && toggle) {
      calculate(1, value);
    } else if (second && !toggle) {
      calculate(0, value);
    }
  };
  return (
    <>
      <button className="person1">Player 1</button>
      {toggle && <Dice callToggle={callToggle} a={0} logic={logic} />}
      <div className="cont">
        <div className="box" id="b100"></div>
        <div className="box" id="b99"></div>
        <div className="box" id="b98"></div>
        <div className="box" id="b97"></div>
        <div className="box" id="b96"></div>
        <div className="box" id="b95"></div>
        <div className="box" id="b94"></div>
        <div className="box" id="b93"></div>
        <div className="box" id="b92"></div>
        <div className="box" id="b91"></div>
        <div className="box" id="b81"></div>
        <div className="box" id="b82"></div>
        <div className="box" id="b83"></div>
        <div className="box" id="b84"></div>
        <div className="box" id="b85"></div>
        <div className="box" id="b86"></div>
        <div className="box" id="b87"></div>
        <div className="box" id="b88"></div>
        <div className="box" id="b89"></div>
        <div className="box" id="b90"></div>
        <div className="box" id="b80"></div>
        <div className="box" id="b79"></div>
        <div className="box" id="b78"></div>
        <div className="box" id="b77"></div>
        <div className="box" id="b76"></div>
        <div className="box" id="b75"></div>
        <div className="box" id="b74"></div>
        <div className="box" id="b73"></div>
        <div className="box" id="b72"></div>
        <div className="box" id="b71"></div>
        <div className="box" id="b61"></div>
        <div className="box" id="b62"></div>
        <div className="box" id="b63"></div>
        <div className="box" id="b64"></div>
        <div className="box" id="b65"></div>
        <div className="box" id="b66"></div>
        <div className="box" id="b67"></div>
        <div className="box" id="b68"></div>
        <div className="box" id="b69"></div>
        <div className="box" id="b70"></div>
        <div className="box" id="b60"></div>
        <div className="box" id="b59"></div>
        <div className="box" id="b58"></div>
        <div className="box" id="b57"></div>
        <div className="box" id="b56"></div>
        <div className="box" id="b55"></div>
        <div className="box" id="b54"></div>
        <div className="box" id="b53"></div>
        <div className="box" id="b52"></div>
        <div className="box" id="b51"></div>
        <div className="box" id="b41"></div>
        <div className="box" id="b42"></div>
        <div className="box" id="b43"></div>
        <div className="box" id="b44"></div>
        <div className="box" id="b45"></div>
        <div className="box" id="b46"></div>
        <div className="box" id="b47"></div>
        <div className="box" id="b48"></div>
        <div className="box" id="b49"></div>
        <div className="box" id="b50"></div>
        <div className="box" id="b40"></div>
        <div className="box" id="b39"></div>
        <div className="box" id="b38"></div>
        <div className="box" id="b37"></div>
        <div className="box" id="b36"></div>
        <div className="box" id="b35"></div>
        <div className="box" id="b34"></div>
        <div className="box" id="b33"></div>
        <div className="box" id="b32"></div>
        <div className="box" id="b31"></div>
        <div className="box" id="b21"></div>
        <div className="box" id="b22"></div>
        <div className="box" id="b23"></div>
        <div className="box" id="b24"></div>
        <div className="box" id="b25"></div>
        <div className="box" id="b26"></div>
        <div className="box" id="b27"></div>
        <div className="box" id="b28"></div>
        <div className="box" id="b29"></div>
        <div className="box" id="b30"></div>
        <div className="box" id="b20"></div>
        <div className="box" id="b19"></div>
        <div className="box" id="b18"></div>
        <div className="box" id="b17"></div>
        <div className="box" id="b16"></div>
        <div className="box" id="b15"></div>
        <div className="box" id="b14"></div>
        <div className="box" id="b13"></div>
        <div className="box" id="b12"></div>
        <div className="box" id="b11"></div>
        <div className="box" id="b1">
          <p className="p1 player1" id="p1"></p>
          <p className="p2 player2" id="p2"></p>
        </div>
        <div className="box" id="b2"></div>
        <div className="box" id="b3"></div>
        <div className="box" id="b4"></div>
        <div className="box" id="b5"></div>
        <div className="box" id="b6"></div>
        <div className="box" id="b7"></div>
        <div className="box" id="b8"></div>
        <div className="box" id="b9"></div>
        <div className="box" id="b10"></div>
      </div>
      {!toggle && <Dice callToggle={callToggle} a={1} logic={logic} />}
      <button className={!toggle ? "person" : "person2"}>Player 2</button>
      {win ? (
        <>
          <Win toggle={toggle} />
        </>
      ) : (
        console.log("Go on")
      )}
    </>
  );
}

export default Board;
