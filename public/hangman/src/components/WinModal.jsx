function WinModal() {
  return (
    <div>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <img src="../images/victory.gif" className="win-img" alt="" />
        <div className="text-center text">
          Congratulations! You found the word.
        </div>
        <div className="text-center">
          <button
            className="btn btn-success mb-3 change_btn"
            onClick={() => {
              location.reload();
            }}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default WinModal;
