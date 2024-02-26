import "../style/win.css";

function Win(props) {
  return (
    <>
      <div>
        <div className="modal-wrapper"></div>
        <div className="modal-container">
          <img src="../images/victory.gif" className="win-img" alt="" />
          <div className="text-center text">
            Congratulations! {props.toggle ? "Player 2." : "Player 1."}
          </div>
          <div className="text-center">
            <button
              className="btn btn-success mb-3"
              onClick={() => {
                location.reload();
              }}
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Win;
