import { useEffect, useState } from "react";
import LooseModal from "./LooseModal";

export const update = (totalSecond) => {
  let minutes = Math.floor(totalSecond / 60);
  let seconds = totalSecond % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let currTime = `${minutes}:${seconds}`;
  return currTime;
};
function Timer(props) {
  const [start, setStart] = useState(1);
  const [totalSecond, setTotalSecond] = useState(1 * 60);
  const [printTime, setPrintTime] = useState("01:00");
  const [loading, setLoading] = useState(false);
  const [isTimer, setTimer] = useState(false);
  useEffect(() => {
    if (totalSecond >= 0) {
      const interval = setInterval(() => {
        setTotalSecond((prev) => prev - 1);
        setPrintTime((prev) => update(totalSecond));
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [totalSecond]);
  return (
    <div className="time">
      {!loading ? (
        <>
          <p id="countdown">
            {printTime == "00:00" ? (
              <LooseModal word={props.word} />
            ) : (
              printTime
            )}
          </p>
        </>
      ) : (
        <>
          <div className="">Loading..</div>
        </>
      )}
    </div>
  );
}
export default Timer;
