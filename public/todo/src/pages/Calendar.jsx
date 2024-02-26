import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef, useState } from "react";
import axiosClient from "../axios_client";
import "../style/calendar.css";

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
  const refTask = useRef();
  const refTitle = useRef();
  const refDate = useRef();
  const [click, setClick] = useState(0);
  const prev = () => {
    if (click == 0) {
      document.getElementById("id1").style.color = "rgba(238, 238, 238, 0.4)";
    } else {
      document.getElementById("id2").style.color = "#fff";
      setClick(click - 1);
      print(click - 1);
    }
  };
  const next = () => {
    if (click == 11) {
      document.getElementById("id2").style.color = "rgba(238, 238, 238, 0.4)";
    } else {
      document.getElementById("id1").style.color = "#fff";
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
    for (let i = 0; i < store; i++) {
      str = str + `<div class="pre-number">` + prev_date + `</div>`;
      prev_date++;
      j++;
    }
    for (let i = 1; i <= month; i++) {
      str = str + `<div class="number">` + i + `</div>`;
      if (j == 6) {
        j = 0;
      } else {
        j++;
      }
    }
    if (j != 0) {
      for (let i = j; i < 7; i++) {
        str = str + `<div class="pre-number">` + k + `</div>`;
        k++;
      }
    }
    document.getElementById("id3").innerHTML = str;
  };
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
        // console.log(data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <>
      <div className="calendar">
        <div className="date">
          <div className="flex">
            <i id="id1">
              <ArrowBackIosIcon onClick={() => prev()} />
            </i>
            <h3>{calendar[click].name}</h3>
            <i id="id2">
              <ArrowForwardIosIcon onClick={() => next()} />
            </i>
          </div>
          <div className="days">
            <div className="flex">
              {days.map((item, i) => (
                <div className="day" key={i}>
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap" id="id3">
              <div className="pre-number">31</div>
              <div className="number">1</div>
              <div className="number">2</div>
              <div className="number">3</div>
              <div className="number">4</div>
              <div className="number">5</div>
              <div className="number">6</div>
              <div className="number">7</div>
              <div className="number">8</div>
              <div className="number">9</div>
              <div className="number">10</div>
              <div className="number">11</div>
              <div className="number">12</div>
              <div className="number">13</div>
              <div className="number">14</div>
              <div className="number">15</div>
              <div className="number">16</div>
              <div className="number">17</div>
              <div className="number">18</div>
              <div className="number">19</div>
              <div className="number">20</div>
              <div className="number">21</div>
              <div className="number">22</div>
              <div className="number">23</div>
              <div className="number">24</div>
              <div className="number">25</div>
              <div className="number">26</div>
              <div className="number">27</div>
              <div className="number">28</div>
              <div className="number">29</div>
              <div className="number">30</div>
              <div className="number">31</div>
              <div className="pre-number">1</div>
              <div className="pre-number">2</div>
              <div className="pre-number">3</div>
            </div>
          </div>
        </div>
        <div
          className="text"
          style={{
            backgroundImage: `url(${calendar[click].image_url})`,
          }}
        >
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
      </div>
    </>
  );
}

export default Calendar;
