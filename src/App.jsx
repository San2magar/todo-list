import { useState } from "react";
import Home from "./Home";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Welcome from "./Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
