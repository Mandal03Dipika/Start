import React from "react";

function PreNumber(props) {
  return (
    <>
      <div className="pre-number" onClick={() => props.prev()}>
        {props.prev_date}
      </div>
    </>
  );
}

export default PreNumber;
