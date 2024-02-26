import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "../style1/calendar.css";
import { useState, useEffect } from "react";
import axiosClient from "../axios_client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../contexts/TaskContextProvider";
import moment from "moment/moment";

function Calendar() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const calendar = [
    {
      name: "January 2024",
      start: "Mon",
      last_date: 31,
      image_url: "Images/1.jpg",
    },
    {
      name: "Feburary  2024",
      start: "Thu",
      last_date: 29,
      image_url: "Images/2.jpg",
    },
    {
      name: "March  2024",
      start: "Fri",
      last_date: 31,
      image_url: "Images/3.jpg",
    },
    {
      name: "April  2024",
      start: "Mon",
      last_date: 30,
      image_url: "Images/4.jpg",
    },
    {
      name: "May  2024",
      start: "Wed",
      last_date: 31,
      image_url: "Images/5.jpg",
    },
    {
      name: "June  2024",
      start: "Sat",
      last_date: 30,
      image_url: "Images/6.jpg",
    },
    {
      name: "July  2024",
      start: "Mon",
      last_date: 31,
      image_url: "Images/7.jpg",
    },
    {
      name: "August 2024",
      start: "Thu",
      last_date: 31,
      image_url: "Images/8.jpg",
    },
    {
      name: "September  2024",
      start: "Sun",
      last_date: 30,
      image_url: "Images/9.jpg",
    },
    {
      name: "October 2024",
      start: "Tue",
      last_date: 31,
      image_url: "Images/10.jpg",
    },
    {
      name: "November  2024",
      start: "Fri",
      last_date: 30,
      image_url: "Images/11.jpg",
    },
    {
      name: "December  2024",
      start: "Sun",
      last_date: 31,
      image_url: "Images/12.jpg",
    },
  ];
  const [click, setClick] = useState(0);
  const prev = () => {
    if (click == 0) {
      document.getElementById("id1").style.color = "rgba(238, 238, 238, 0.4)";
    } else {
      document.getElementById("id2").style.color = "black";
      setClick(click - 1);
      print(click - 1);
    }
  };
  const next = () => {
    if (click == 11) {
      document.getElementById("id2").style.color = "rgba(238, 238, 238, 0.4)";
    } else {
      document.getElementById("id1").style.color = "black";
      setClick(click + 1);
      print(click + 1);
    }
  };
  const print = (click) => {
    var month = calendar[click].last_date;
    var week = calendar[click].start;
    var prev_date = calendar[click].last_date;
    var store;
    for (let i = 0; i < days.length; i++) {
      if (days[i] == week) {
        store = i;
        break;
      }
    }
    var j = 0,
      k = 1,
      str = "";
    prev_date = prev_date - store + 1;
    var row = 0;
    for (let i = 0; i < store; i++) {
      str = str + `<td class="calendarBox">` + prev_date + `</td>`;
      row++;
      prev_date++;
      j++;
    }
    if (row > 6) {
      str = str + `<tr></tr>`;
      row = 0;
    }
    for (let i = 1; i <= month; i++) {
      str = str + `<td class="calendarBox">` + i + `</td>`;
      row++;
      if (row > 6) {
        str = str + `<tr></tr>`;
        row = 0;
      }
      if (j == 6) {
        j = 0;
      } else {
        j++;
      }
    }
    if (row > 6) {
      str = str + `<tr></tr>`;
      row = 0;
    }
    if (j != 0) {
      for (let i = j; i < 7; i++) {
        str = str + `<td class="calendarBox">` + k + `</td>`;
        k++;
      }
    }
    document.getElementById("id3").innerHTML = str;
  };
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
      <div
        className="main1"
        style={{
          backgroundImage: `url(${calendar[click].image_url})`,
        }}
      >
        <div className="broke">
          <div className="calendar">
            <table>
              <thead>
                <tr>
                  <th id="id1">
                    <ArrowBackIosIcon onClick={() => prev()} />
                  </th>
                  <th colSpan={7} className="calendarBox">
                    {calendar[click].name}
                  </th>
                  <th id="id2">
                    <ArrowForwardIosIcon onClick={() => next()} />
                  </th>
                </tr>
                <tr>
                  {days.map((item, i) => (
                    <th className="calendarBox" key={i}>
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody id="id3">
                <tr>
                  <td className="calendarBox"></td>
                  <td className="calendarBox">1</td>
                  <td className="calendarBox">2</td>
                  <td className="calendarBox">3</td>
                  <td className="calendarBox">4</td>
                  <td className="calendarBox">5</td>
                  <td className="calendarBox">6</td>
                </tr>
                <tr>
                  <td className="calendarBox">7</td>
                  <td className="calendarBox">8</td>
                  <td className="calendarBox">9</td>
                  <td className="calendarBox">10</td>
                  <td className="calendarBox">11</td>
                  <td className="calendarBox">12</td>
                  <td className="calendarBox">13</td>
                </tr>
                <tr>
                  <td className="calendarBox">14</td>
                  <td className="calendarBox">15</td>
                  <td className="calendarBox">16</td>
                  <td className="calendarBox">17</td>
                  <td className="calendarBox">18</td>
                  <td className="calendarBox">19</td>
                  <td className="calendarBox">20</td>
                </tr>
                <tr>
                  <td className="calendarBox">21</td>
                  <td className="calendarBox">22</td>
                  <td className="calendarBox">23</td>
                  <td className="calendarBox">24</td>
                  <td className="calendarBox">25</td>
                  <td className="calendarBox">26</td>
                  <td className="calendarBox">27</td>
                </tr>
                <tr>
                  <td className="calendarBox">28</td>
                  <td className="calendarBox">29</td>
                  <td className="calendarBox">30</td>
                  <td className="calendarBox">31</td>
                  <td className="calendarBox"></td>
                  <td className="calendarBox"></td>
                  <td className="calendarBox"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="task">
            <table>
              <thead>
                <tr>
                  <th colSpan={2} className="taskBox">
                    TASKS
                  </th>
                </tr>
                <tr>
                  <th className="taskBox">Title</th>
                  <th className="tasks">Tasks</th>
                </tr>
              </thead>
              <tbody>
                {filteredTasks.map((item, i) => (
                  <tr key={i}>
                    <td className="taskBox">{item.title}</td>
                    <td className="tasks">{item.task}</td>
                  </tr>
                ))}
                <tr>
                  <td
                    colSpan={2}
                    style={
                      tasks.length == 0
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    No Results Found
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <Link className="tbn" to="/add">
                      <AddIcon />
                      Add Task
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default Calendar;
