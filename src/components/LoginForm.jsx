import { Eye, EyeOff } from "lucide-react";
import React from "react";

const LoginForm = ({ isVisible, handlePasswordVisible }) => {
  return (
    <form className="flex flex-col gap-6 w-full">
      <input className="input-design" type="email" placeholder="Email" />
      <div className="relative">
        <input
          className="input-design"
          type={isVisible === false ? "password" : "text"}
          placeholder="Password"
        />
        <div className="icon" onClick={handlePasswordVisible}>
          {isVisible === false ? (
            <Eye className="w-5 h-5" />
          ) : (
            <EyeOff className="w-5 h-5" />
          )}
        </div>
      </div>
      <button className="btn" type="submit">
        <span className="select-none">Log In</span>
      </button>
    </form>
  );
};

export default LoginForm;
