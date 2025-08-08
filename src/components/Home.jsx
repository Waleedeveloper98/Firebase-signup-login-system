import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";

const Home = ({ user }) => {
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Welcome, <span className="text-blue-600">{user?.email}</span>
      </h1>
      <button
        onClick={handleSignout}
        className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
