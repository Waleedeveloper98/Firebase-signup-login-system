import React, { useEffect, useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const handlePasswordVisible = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (newUser) => {
      if (newUser) {
        setUser(newUser);
        setLoading(false);
        navigate("/home");
      } else {
        setLoading(false);
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div
          className="loader border-t-2 rounded-full border-blue-500  animate-spin
aspect-square w-8 flex justify-center items-center "
        ></div>
      </div>
    );
  }

  return (
    <main className="w-full h-screen bg-zinc-100 max-h-screen flex items-center justify-center">
      <Toaster />
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
        <Route
          path="/home"
          element={
            <ProtectedRoute user={user}>
              <Home user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </main>
  );
};

export default App;
