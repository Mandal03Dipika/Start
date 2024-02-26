import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import EditIcon from "@mui/icons-material/Edit";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import PersonIcon from "@mui/icons-material/Person";

function Sidebar(props) {
  return (
    <>
      <div className="side-nav-content">
        <ul className="nav-list">
          <li className="nav-list-item">
            <i>
              <HomeIcon className="text-white" fontSize="small" />
            </i>
            <span>
              <Link
                className="a"
                to="/home"
                onClick={() => props.action("Home", "/home")}
              >
                Home
              </Link>
            </span>
          </li>
          {/* <li className="nav-list-item">
            <i>
              <MenuBookIcon className="text-white" fontSize="small" />
            </i>
            <span>
              <Link
                className="a"
                to="/planning"
                onClick={() => props.action("My Plans", "/planning")}
              >
                My Plans
              </Link>
            </span>
          </li> */}
          <li className="nav-list-item">
            <i>
              <EditIcon className="text-white" fontSize="small" />
            </i>
            <span>
              <Link
                className="a"
                to="/task"
                onClick={() => props.action("Task", "/task")}
              >
                Task
              </Link>
            </span>
          </li>
          <li className="nav-list-item">
            <i>
              <EditCalendarIcon className="text-white" fontSize="small" />
            </i>
            <span>
              <Link
                className="a"
                to="/calendar"
                onClick={() => props.action("Calendar", "/calendar")}
              >
                Calendar
              </Link>
            </span>
          </li>
          {/* <li className="nav-list-item">
            <i>
              <WorkIcon className="text-white" fontSize="small" />
            </i>
            <span>
              <Link
                className="a"
                to="/pending"
                onClick={() => props.action("Pending Works", "/pending")}
              >
                Pending Works
              </Link>
            </span>
          </li> */}
          <li className="nav-list-item">
            <i>
              <PersonIcon className="text-white" fontSize="small" />
            </i>
            <span>
              <Link
                className="a"
                to="/about"
                onClick={() => props.action("About", "/about")}
              >
                About
              </Link>
            </span>
          </li>
          <li className="nav-list-item">
            <i>
              <SentimentSatisfiedAltIcon
                className="text-white"
                fontSize="small"
              />
            </i>
            <span>
              <Link
                className="a"
                to="/portfolio"
                onClick={() => props.action("Portfolio", "/portfolio")}
              >
                Portfolio
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
