import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate()
  return (
    <div className="wrapper-box">
      <h2 className="title">Sign up</h2>
      <form className="flex flex-col gap-6 w-full">
        <input className="input-design" type="text" placeholder="Name" />
        <input className="input-design" type="email" placeholder="Email" />
        <input className="input-design" type="password" placeholder="Password" />
        <input className="btn" type="submit" value="Sign up" />
      </form>
      <p className="text-zinc-500 ">
        Already have an account? <span onClick={()=> navigate("/login")} className="link-span">Log In</span>
      </p>
    </div>
  );
};

export default Signup;
