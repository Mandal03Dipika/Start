import { useEffect, useState } from "react";
import NumButton from "./NumButton";
import OpeButton from "./OpeButton";
import ActionButton from "./ActionButton";

const Calculator = (props) => {
  const [number, setNumber] = useState(0);
  const [operator, setOperator] = useState("");
  const [numberString, setNumberString] = useState("");
  const [equation, setEquation] = useState("");

  useEffect(() => {
    setNumberString(numberString + number.toString());
    setEquation(equation + number.toString());
  }, [number]);
  useEffect(() => {
    if (
      equation[equation.length - 1] == "+" ||
      equation[equation.length - 1] == "-" ||
      equation[equation.length - 1] == "*" ||
      equation[equation.length - 1] == "/" ||
      equation[equation.length - 1] == "%" ||
      equation[equation.length - 1] == "^"
    ) {
      // equation[equation.length-1]=operator;
      // var change='';
      // for(let i=0;i<equation.length-1;i++)
      // {
      //     change=change+equation[i];
      // }
      // change=change+operator;
      // setEquation(change)
      // console.log(change,operator);
      setEquation(equation);
    } else {
      setEquation(equation + operator);
    }
  }, [operator]);
  const solveEquation = () => {
    let equationString = equation;
    console.log(equationString);
    let evalf = eval(equationString);
    console.log("Evaluation by function: ", evalf);
    setEquation(evalf);
  };
  const deleteLast = () => {
    var change = "";
    for (let i = 0; i < equation.length - 1; i++) {
      change = change + equation[i];
    }
    setEquation(change);
  };
  return (
    <>
      <div className="calculator" id="id5">
        <div className="calculator__output">{equation}</div>
        <div className="calculator__keys">
          <OpeButton onClick={() => deleteLast()} item={"Del"} />
          <OpeButton onClick={() => setOperator("%")} item={"%"} />
          <OpeButton onClick={() => setOperator("^")} item={"^"} />
          <OpeButton onClick={() => setOperator("/")} item={"/"} />
          <NumButton onClick={() => setNumber(7)} number={7} />
          <NumButton onClick={() => setNumber(8)} number={8} />
          <NumButton onClick={() => setNumber(9)} number={9} />
          <OpeButton onClick={() => setOperator("*")} item={"x"} />
          <NumButton onClick={() => setNumber(4)} number={4} />
          <NumButton onClick={() => setNumber(5)} number={5} />
          <NumButton onClick={() => setNumber(6)} number={6} />
          <OpeButton onClick={() => setOperator("-")} item={"-"} />
          <NumButton onClick={() => setNumber(1)} number={1} />
          <NumButton onClick={() => setNumber(2)} number={2} />
          <NumButton onClick={() => setNumber(3)} number={3} />
          <OpeButton onClick={() => setOperator("+")} item={"+"} />
          <NumButton onClick={() => setNumber(0)} number={0} />
          <OpeButton onClick={() => setOperator(".")} item={"."} />
          <OpeButton onClick={() => setEquation("")} item={"AC"} />
          <ActionButton onClick={() => solveEquation()} item={"="} />
        </div>
      </div>
    </>
  );
};
export default Calculator;
