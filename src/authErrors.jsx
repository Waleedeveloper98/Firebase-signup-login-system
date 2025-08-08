let authErrors = (error) => {
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

  return msg;
};

export default authErrors;
