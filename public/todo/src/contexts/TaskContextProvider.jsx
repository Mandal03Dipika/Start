import { createContext, useContext, useState } from "react";
import axiosClient from "../axios_client";

const TaskContext = createContext({
  tasks: null,
  setTasks: () => {},
  del: () => {},
  changeStatus: () => {},
});

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const del = async (id) => {
    let uri = "/tasks/:id";
    uri = uri.replace(":id", id);
    axiosClient
      .delete(uri)
      .then(({ data }) => {
        let newTask = [...tasks];
        newTask = newTask.filter((item) => {
          return item.id != id;
        });
        setTasks(newTask);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  const changeStatus = (status, id, title, task, date) => {
    let viceVersa;
    if (status == "completed") {
      viceVersa = "pending";
    } else {
      viceVersa = "completed";
    }
    const payLoad = {
      task: task,
      title: title,
      date: date,
      status: viceVersa,
    };
    let uri = "/tasks/:id";
    uri = uri.replace(":id", id);
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
    <TaskContext.Provider value={{ tasks, setTasks, del, changeStatus }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
