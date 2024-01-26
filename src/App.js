import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/user/Login";
import Image from "./components/user/Ocr";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/image" element={<Image />} />

      </Routes>
    </>
  );
}

export default App;
