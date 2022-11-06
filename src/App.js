import { Fragment } from "react";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Routes, Route } from "react-router-dom";
import Todos from "./pages/home/Home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import About from "./pages/about/About";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<SignUp />} path="signup" />
        <Route element={<Todos />} path="home" />
        <Route element={<About />} path="about" />
      </Routes>
      <ReactQueryDevtools />
    </Fragment>
  );
}

export default App;
