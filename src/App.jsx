import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import Loader from "./components/Loader";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (newUser) => {
      if (newUser) {
        setUser(newUser);
        if (location.pathname === "/login") {
          navigate("/home");
        }
      } else if (!newUser && location.pathname !== "/login") {
        navigate("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user, location.pathname, navigate]);

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
