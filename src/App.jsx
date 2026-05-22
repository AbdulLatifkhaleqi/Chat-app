import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./features/auth/pages/Register";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
