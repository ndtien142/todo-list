import { Fragment } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<SignUp />} path="signup" />
        <Route element={<Home />} path="home" />
        <Route element={<About />} path="about" />
      </Routes>
      <ReactQueryDevtools />
    </Fragment>
  );
}

export default App;
