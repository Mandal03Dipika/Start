import { useRef } from "react";
import axiosClient from "../axios_client";
import "../style1/login.css";
import { Navigate } from "react-router-dom";

function Add() {
  const refTask = useRef();
  const refTitle = useRef();
  const refDate = useRef();

  const submitTask = (event) => {
    event.preventDefault();
    const payLoad = {
      task: refTask.current.value,
      title: refTitle.current.value,
      date: refDate.current.value,
    };
    axiosClient
      .post("/tasks", payLoad)
      .then(({ data }) => {
        <Navigate to="/calendar" />;
        // console.log(data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <>
      <div className="contain">
        <div className="wrapper">
          <form onSubmit={submitTask}>
            <h1>Add Task</h1>
            <div className="input-box">
              <input type="text" ref={refTitle} placeholder="Title" />
            </div>
            <div className="input-box">
              <input type="text" ref={refTask} placeholder="Task" />
            </div>
            <div className="input-box">
              <input ref={refDate} type="date" />
            </div>
            <button className="btn">Save</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Add;
