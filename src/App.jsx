import React, { useEffect, useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import ProtectedRoute from "./routes/ProtectedRoute";
import Loader from "./components/Loader";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    try {
      const unsubscribe = onAuthStateChanged(auth, (newUser) => {
        if (newUser) {
          setUser(newUser);
          setLoading(false);
          if (location.pathname !== "/home") {
            navigate("/home");
          }
        } else {
          setUser(null);
          setLoading(false);
          if (location.pathname !== "/login") {
            navigate("/login");
          }
        }
      });
    } catch (error) {
      console.log(error);
    }

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <main className="main">
      <Toaster />
      <AppRoutes user={user} />
    </main>
  );
};

export default App;
