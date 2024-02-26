import React, { useEffect } from "react";
// import Navbar from "./Navbar";
import Navbar_Own from "./Nav_Own";
import { Navigate, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios_client";

function Layout() {
  const { token, setUser } = useStateContext();
  useEffect(() => {
    axiosClient
      .get("/user")
      .then(({ data }) => {
        setUser(data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      {/* <div className="fix"> */}
      {/* <img src="Images/back.gif" alt="" className="vid-bg" /> */}
      {/* <Navbar /> */}
      <Navbar_Own />
      <main>
        <Outlet />
      </main>
      {/* </div> */}
    </>
  );
}

export default Layout;
