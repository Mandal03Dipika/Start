function LooseModal(props) {
  return (
    <div>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <img src="../images/lost.gif" alt="" className="win-img mt-2" />
        <div className="text-center text">
          Despair! The Correct word was {props.word} .
        </div>
        <div className="text-center">
          <button
            className="btn btn-danger mb-3 change_btn"
            onClick={() => {
              location.reload();
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default LooseModal;
