import React from "react";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      <h1>DefaultLayout</h1>
      <Outlet />
    </>
  );
}

export default DefaultLayout;
