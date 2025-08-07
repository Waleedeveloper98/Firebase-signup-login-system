import React from "react";

const SignupForm = () => {
  return (
    <form className="flex flex-col gap-6 w-full">
      <input className="input-design" type="text" placeholder="Name" />
      <input className="input-design" type="email" placeholder="Email" />
      <input className="input-design" type="password" placeholder="Password" />
      <button className="btn" type="submit">Sign up</button>
    </form>
  );
};

export default SignupForm;
