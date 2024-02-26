import { useEffect, useState } from "react";
import axiosClient from "../axios_client";
import moment from "moment/moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../contexts/TaskContextProvider";
import { useStateContext } from "../contexts/ContextProvider";
import "../style/task.css";

function Task() {
  const { tasks, setTasks, del, changeStatus } = useTaskContext();
  const [filteredTasks, setFilteredTasks] = useState([]);
  useEffect(() => {
    axiosClient.get("/tasks").then(({ data }) => {
      setTasks(data.data);
      setFilteredTasks(data.data);
    });
  }, [filteredTasks]);
  const navigate = useNavigate();
  const edit = (id, task, title, date) => {
    const data = { id: id, task: task, title: title, date: date };
    navigate("/edit", { state: data });
  };
  const { user } = useStateContext();
  const filtering = (checkStatus) => {
    if (checkStatus == "all") {
      setFilteredTasks(tasks);
    } else {
      let filteredTasks = [...tasks];
      filteredTasks = filteredTasks.filter((item) => {
        return item.status == checkStatus;
      });
      setFilteredTasks(filteredTasks);
    }
  };
  return (
    <>
      <div className="contain_table">
        <div className="wrapper_table">
          <section className="table_head">
            <h1>{user.name}'s Task</h1>
            <div className="dropdown">
              <h2 className="dropdown-toggle" data-toggle="dropdown">
                Filter
              </h2>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => filtering("all")}
                  >
                    All Tasks
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => filtering("completed")}
                    className="dropdown-item"
                  >
                    Completed
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => filtering("pending")}
                    className="dropdown-item"
                  >
                    Pending
                  </button>
                </li>
              </ul>
            </div>
          </section>
          <section className="table_body">
            <table
              style={tasks.length == 0 ? { display: "none" } : { display: "" }}
            >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Task</th>
                  <th>Date</th>
                  <th>Status</th>
                  {/* <th>Change Status</th> */}
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredTasks.map((item, i) => (
                  <tr key={i}>
                    <td>{item.title}</td>
                    <td>{item.task}</td>
                    <td>{moment(item.date).format("DD-MM-yyyy")}</td>
                    <td>
                      <button
                        className="rounded badge"
                        style={
                          item.status == "completed"
                            ? { background: "rgba(133, 251, 112, 0.82)" }
                            : { background: "rgba(255, 110, 112, 0.82)" }
                        }
                        onClick={() =>
                          changeStatus(
                            item.status,
                            item.id,
                            item.title,
                            item.task,
                            item.date
                          )
                        }
                      >
                        {item.status}
                      </button>
                    </td>
                    {/* <td>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </td> */}
                    <td>
                      <button
                        className="btn"
                        onClick={() =>
                          edit(
                            item.id,
                            item.task,
                            item.title,
                            moment(item.date).format("yyyy-MM-DD")
                          )
                        }
                      >
                        <EditIcon />
                      </button>
                      <button className="btn" onClick={() => del(item.id)}>
                        <DeleteIcon />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h1
              style={
                tasks.length == 0 ? { display: "block" } : { display: "none" }
              }
            >
              No Results Found
            </h1>
          </section>
        </div>
      </div>
    </>
  );
}

export default Task;
