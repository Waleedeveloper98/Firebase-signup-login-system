import React, { useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handlePasswordVisible = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <main className="w-full h-screen bg-zinc-100 max-h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/signup"
          element={
            <Signup
              handlePasswordVisible={handlePasswordVisible}
              isVisible={isVisible}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              handlePasswordVisible={handlePasswordVisible}
              isVisible={isVisible}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default App;
