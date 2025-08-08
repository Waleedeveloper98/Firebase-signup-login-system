import { signInWithEmailAndPassword } from "firebase/auth";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import authErrors from "../authErrors";

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordVisible = () => {
    setIsVisible((prev) => !prev);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email.trim() || !password.trim()) {
      toast("Please Fill All Fields!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setLoading(false);
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Successfully Log In!");
      setLoading(false);
      navigate("/home");
    } catch (error) {
      console.log(error.code);
      setLoading(false);
      toast.error(authErrors(error));
    }
  };

  return (
    <form className="flex flex-col gap-6 w-full">
      <input
        className="input-design"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="relative">
        <input
          className="input-design"
          type={isVisible ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="icon" onClick={handlePasswordVisible}>
          {isVisible ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </div>
      </div>
      <button
        onClick={handleSignIn}
        className="btn flex items-center justify-center"
        type="submit"
      >
        {loading ? (
          <div
            className="loader border-t-2 rounded-full border-zinc-100  animate-spin
aspect-square w-8 flex justify-center items-center "
          ></div>
        ) : (
          <span className="select-none">Log In</span>
        )}
      </button>
    </form>
  );
};

export default LoginForm;
