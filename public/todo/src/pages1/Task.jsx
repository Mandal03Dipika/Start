import { useEffect, useState } from "react";
import axiosClient from "../axios_client";
import moment from "moment/moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../contexts/TaskContextProvider";
import "../style1/calendar.css";

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
      <div className="main2" style={{ backgroundImage: `url("Images/2.jpg")` }}>
        <div className="task1">
          <table>
            <thead>
              <tr>
                <th colSpan={4} className="taskBox">
                  TASKS
                </th>
                <th>
                  <div className="dropdown">
                    <h5 className="dropdown-toggle" data-toggle="dropdown">
                      Filter
                    </h5>
                    <ul className="dropdown-menu">
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
                </th>
              </tr>
              <tr>
                <th className="taskBox">Title</th>
                <th className="tasks">Tasks</th>
                <th className="taskBox">Date</th>
                <th className="taskBox">Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.map((item, i) => (
                <tr key={i}>
                  <td className="taskBox">{item.title}</td>
                  <td className="tasks">{item.task}</td>
                  <td className="taskBox">
                    {moment(item.date).format("DD-MM-yyyy")}
                  </td>
                  <td className="taskBox">
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
                  <td>
                    <button
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
                    <button onClick={() => del(item.id)}>
                      <DeleteIcon />
                    </button>
                  </td>
                </tr>
              ))}
              <td
                colSpan={5}
                style={
                  tasks.length == 0 ? { display: "block" } : { display: "none" }
                }
              >
                No Results Found
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Task;
