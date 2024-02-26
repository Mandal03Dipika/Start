import React, { useEffect, useRef, useState } from "react";

function Modal(props) {
  const refName = useRef();
  const refType = useRef();
  const refLike = useRef();
  const refUrl = useRef();
  const [newImage, setNewImage] = useState({
    name: "",
    type: "",
    likes: "",
    img_url: "",
  });
  const addTask = (event) => {
    event.preventDefault();
    setNewImage({
      name: refName.current.value,
      type: refType.current.value,
      likes: refLike.current.value,
      img_url: "../images/" + refUrl.current.value,
    });
  };
  useEffect(() => {
    if (newImage.name != "") {
      props.addImage(newImage);
    }
  }, [newImage]);

  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <form onSubmit={addTask}>
          <h1 className="mt-3 text-center">Add Image</h1>
          <div className=" in">
            <input type="text" placeholder="Name" ref={refName} />
          </div>
          <div className="in">
            <input type="text" placeholder="Type" ref={refType} />
          </div>
          <div className="in">
            <input type="number" placeholder="Likes" ref={refLike} />
          </div>
          <div className="in">
            <input type="text" placeholder="Image Url" ref={refUrl} />
          </div>
          <div className="d-flex justify-content-center mt-3 mb-3">
            <button className="mx-4 btn btn-success">Save</button>
            <button onClick={props.close} className="btn btn-danger">
              Close
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Modal;
