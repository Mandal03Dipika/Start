// import { createBrowserRouter } from "react-router-dom";
// import Task from "./pages/Task";
// import About from "./pages/About";
// import Calendar from "./pages/Calendar";
// import Home from "./pages/Home";
// import Pending from "./pages/Pending";
// import Planning from "./pages/Planning";
// import Portfolio from "./pages/Portfolio";
// import Layout from "./components/Layout";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import DefaultLayout from "./components/DefaultLayout";
// import GuestLayout from "./components/GuestLayout";
// import Contact from "./pages/Contact";
// import Edit from "./pages/Edit";

// const router = createBrowserRouter([
//   //   {
//   //     path: "/",
//   //     element: <DefaultLayout />,
//   //     children: [
//   //       {
//   //         path: "layout",
//   //         element: <Layout />,
//   //       },
//   //     ],
//   //   },
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "task",
//         element: <Task />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "calendar",
//         element: <Calendar />,
//       },
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "pending",
//         element: <Pending />,
//       },
//       {
//         path: "planning",
//         element: <Planning />,
//       },
//       {
//         path: "portfolio",
//         element: <Portfolio />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "edit",
//         element: <Edit />,
//       },
//     ],
//   },
//   {
//     path: "/",
//     element: <GuestLayout />,
//     children: [
//       {
//         path: "login",
//         element: <Login />,
//       },
//       {
//         path: "register",
//         element: <Register />,
//       },
//     ],
//   },
// ]);
// export default router;

import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./components/GuestLayout";
import Home from "./pages1/Home";
import About from "./pages1/About";
import Calendar from "./pages1/Calendar";
import Login from "./pages1/Login";
import Register from "./pages1/Register";
import Layout from "./components/Layout";
import Contact from "./pages1/Contact";
import Edit from "./pages/Edit";
import Add from "./pages1/Add";
import Task from "./pages1/Task";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "edit",
        element: <Edit />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "task",
        element: <Task />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
