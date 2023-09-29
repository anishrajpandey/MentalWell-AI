import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import LoginUser from "./screens/LoginUser";
import Forum from "./screens/Forum.jsx";
import FindTherapist from "./screens/FindTherapist.jsx";
import SignupUser from "./screens/SignupUser";
import SignupTherapist from "./screens/SignupTherapist";
import LoginTherapist from "./screens/LoginTherapist";
import forum from "./screens/Forum.jsx";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="loginuser" element={<LoginUser />} />
        <Route exact path="logintherapist" element={<LoginTherapist />} />
        <Route exact path="signupuser" element={<SignupUser />} />
        <Route exact path="signuptherapist" element={<SignupTherapist />} />
        <Route exact path="findtherapist" element={<FindTherapist />} />
        <Route exact path="forum" element={<Forum />} />
      </Routes>
    </div>
  );
}

export default App;
