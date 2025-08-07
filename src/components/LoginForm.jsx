import React from "react";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-6 w-full">
      <input className="input-design" type="email" placeholder="Email" />
      <input className="input-design" type="password" placeholder="Password" />
      <button className="btn" type="submit">
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
