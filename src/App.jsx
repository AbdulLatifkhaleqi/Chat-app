import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./features/auth/pages/Register";
import Login from "./features/auth/pages/Login";

function App() {
  return (
    <div className="w-full ">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
