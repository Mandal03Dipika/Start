import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios_client";
import { useNavigate } from "react-router-dom";
import Theme from "./Theme";
import { useState } from "react";
import Dropdown from "./Dropdown";
import "../style/navbar.css";

function Navbar() {
  const { user, setToken, setUser } = useStateContext();
  const navigate = useNavigate();
  const out = () => {
    axiosClient
      .post("/logout")
      .then(({ data }) => {
        setUser({});
        setToken(null);
      })
      .catch((error) => {
        console.log(error.response);
      });
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-area">
        <div className="container-fluid">
          <div className="logo">
            <span>To</span>Do
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav menu-area ">
              <li className="nav-item">
                <Link className="a nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="a nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="a nav-link" to="/task">
                  Task
                </Link>
              </li>
              <li className="nav-item">
                <Link className="a nav-link" to="/calendar">
                  Calendar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="a nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Theme />
              </li>
              <li className="nav-item">
                <Dropdown name={user.name} out={out} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
