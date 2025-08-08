import { Eye, EyeOff } from "lucide-react";
import { auth } from "../../config/firebase";
import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupForm = ({ isVisible, handlePasswordVisible }) => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (name.trim() === "" && email.trim() === "" && password.trim() === "") {
      toast("Please Fill Form!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      toast("Please Fill Form Fields!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Successfully Sign up!");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      let msg = "";
      switch (error.code) {
        case "auth/email-already-in-use":
          msg = "This email is already registered.";
          break;

        case "auth/invalid-email":
          msg = "The email format is incorrect.";
          break;

        case "auth/operation-not-allowed":
          msg = "Email/password accounts are not enabled in Firebase.";
          break;

        case "auth/weak-password":
          msg = "Password should be at least 6 characters.";
          break;

        case "auth/missing-email":
          msg = "Please enter your email.";
          break;

        case "auth/internal-error":
          msg = "An internal error occurred. Please try again.";
          break;

        case "auth/network-request-failed":
          msg = "Network error. Please check your internet connection.";
          break;

        case "auth/too-many-requests":
          msg = "Too many attempts. Please try again later.";
          break;

        case "auth/invalid-credential":
          msg = "Invalid credentials provided.";
          break;

        case "auth/invalid-password":
          msg = "Invalid password. Please try again.";
          break;

        default:
          msg = "Signup failed. Please try again.";
      }
      console.log(error.code);
      setLoading(false);
      toast.error(msg);
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
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="input-design"
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="relative">
        <input
          className="input-design"
          type={isVisible === false ? "password" : "text"}
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
            className="loader border-t-2 rounded-full border-gray-100  animate-spin
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
