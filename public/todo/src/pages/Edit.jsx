import React from "react";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import axiosClient from "../axios_client";
import { useNavigate } from "react-router-dom";
import "../style1/login.css";

function Edit() {
  const location = useLocation();
  const data = location.state;
  const refTask = useRef();
  const refTitle = useRef();
  const refDate = useRef();
  const navigate = useNavigate();
  const submit = (event) => {
    event.preventDefault();
    const payLoad = {
      task: refTask.current.value,
      title: refTitle.current.value,
      date: refDate.current.value,
      status: "pending",
    };
    let uri = "/tasks/:id";
    uri = uri.replace(":id", data.id);
    axiosClient
      .patch(uri, payLoad)
      .then(({ data }) => {
        navigate("/task");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <>
      <>
        <div className="contain">
          <div className="wrapper">
            <form onSubmit={submit}>
              <h1>Edit</h1>
              <div className="input-box">
                <input
                  type="text"
                  ref={refTitle}
                  placeholder="Title"
                  defaultValue={data.title}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  ref={refTask}
                  placeholder="Task"
                  defaultValue={data.task}
                />
              </div>
              <div className="input-box">
                <input
                  type="date"
                  ref={refDate}
                  placeholder="Date"
                  defaultValue={data.date}
                />
              </div>
              <button className="btn">Update</button>
            </form>
          </div>
        </div>
      </>
    </>
  );
}

export default Edit;
