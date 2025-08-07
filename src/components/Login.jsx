import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <section className="wrapper-box">
      <h2 className="title">Log In</h2>
      <LoginForm />
      <p className="text-zinc-500 ">
        Don’t have an account?{" "}
        <Link to={"/signup"} className="link-span">
          Sign up
        </Link>
      </p>
    </section>
  );
};

export default Login;
