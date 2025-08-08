import { Eye, EyeOff } from "lucide-react";
import { auth } from "../../config/firebase";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import authErrors from "../authErrors";

const SignupForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlePasswordVisible = () => {
    setIsVisible((prev) => !prev);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name.trim() || !email.trim() || !password.trim()) {
      toast("Please Fill Full Form!", {
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
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Successfully Sign up!");
      setLoading(false);
      setName("");
      setEmail("");
      setPassword("");
      navigate("/login");
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
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onBlur={(e) => setName(e.target.value)}
      />
      <input
        className="input-design"
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onBlur={(e) => setEmail(e.target.value)}
      />
      <div className="relative">
        <input
          className="input-design"
          type={isVisible === false ? "password" : "text"}
          placeholder="Password"
          name="password"
          value={password}
          onBlur={(e) => setPassword(e.target.value)}
        />
        <div className="icon" onClick={handlePasswordVisible}>
          {isVisible === false ? (
            <Eye className="w-5 h-5" />
          ) : (
            <EyeOff className="w-5 h-5" />
          )}
        </div>
      </div>
      <button
        disabled={loading}
        onClick={handleSignup}
        className={`btn flex items-center justify-center`}
        type="submit"
      >
        {loading ? (
          <div
            className="loader border-t-2 rounded-full border-zinc-100  animate-spin
aspect-square w-8 flex justify-center items-center "
          ></div>
        ) : (
          <span className="select-none">Sign up</span>
        )}
      </button>
    </form>
  );
};

export default SignupForm;
