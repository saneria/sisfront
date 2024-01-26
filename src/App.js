import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/user/Login";
import Image from "./components/user/Ocr";
import AdminPage from "./components/user/AdminPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<Image />} />
        <Route path="/adminpage" element={<AdminPage />} />

      </Routes>
    </>
  );
}

export default App;
