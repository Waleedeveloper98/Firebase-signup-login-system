import React, { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main className="w-full h-screen bg-zinc-100 max-h-screen flex items-center justify-center">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default App;
