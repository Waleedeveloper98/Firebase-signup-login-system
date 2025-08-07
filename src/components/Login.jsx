import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="wrapper-box">
      <h2 className="title">Log In</h2>
      <form className="flex flex-col gap-6 w-full">
        <input className="input-design" type="email" placeholder="Email" />
        <input
          className="input-design"
          type="password"
          placeholder="Password"
        />
        <input className="btn" type="submit" value="Log In" />
      </form>
      <p className="text-zinc-500 ">
        Don’t have an account?{" "}
        <span onClick={()=> navigate("/signup")} className="link-span">
          Sign up
        </span>
      </p>
    </div>
  );
};

export default Login;
