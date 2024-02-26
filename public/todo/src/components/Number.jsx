import React from "react";

function Number(props) {
  return (
    <>
      <div className="number" onClick={() => props.next()}>
        {props.date}
      </div>
    </>
  );
}

export default Number;
