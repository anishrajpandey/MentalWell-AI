import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
