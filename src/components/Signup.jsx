import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";

const Signup = ({ isVisible, handlePasswordVisible }) => {
  return (
    <section className="wrapper-box">
      <h2 className="title">Sign up</h2>
      <SignupForm
        handlePasswordVisible={handlePasswordVisible}
        isVisible={isVisible}
      />
      <p className="text-zinc-500 ">
        Already have an account?{" "}
        <Link to={"/login"} className="link-span">
          Log In
        </Link>
      </p>
    </section>
  );
};

export default Signup;
