import React from "react";

const Signup = () => {
  return (
    <div className="wrapper-box">
      <h2 className="title">Sign up</h2>
      <form className="flex flex-col gap-6 w-full">
        <input className="input-design" type="text" placeholder="Name" />
        <input className="input-design" type="text" placeholder="Email" />
        <input className="input-design" type="text" placeholder="Password" />
        <input className="btn" type="submit" value="Sign up" />
      </form>
      <p className="text-zinc-500 ">
        Already have an account? <span className="link-span">Log In</span>
      </p>
    </div>
  );
};

export default Signup;
