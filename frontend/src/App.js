import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";
import Login from "./screens/Login";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="signup" element={<Signup />} />
        <Route exact path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
