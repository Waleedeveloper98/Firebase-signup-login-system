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
      setUser(newUser);
      if (newUser && ["/login", "/signup"].includes(location.pathname)) {
        navigate("/home");
      }
      if (!newUser && !["/login", "/signup"].includes(location.pathname)) {
        navigate("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [location.pathname]);

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
