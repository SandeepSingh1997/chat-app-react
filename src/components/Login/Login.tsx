import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { FormEvent, ChangeEvent, useRef } from "react";
import auth from "../../pages/Landing/firebaseAuth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const emailInputRef = useRef<string>("");
  const passwordInputRef = useRef<string>("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        emailInputRef.current,
        passwordInputRef.current
      );
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert("user couldn't log in");
    }
  };

  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    emailInputRef.current = e.target.value;
  };
  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    passwordInputRef.current = e.target.value;
  };
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="email"
        onChange={handleEmailInputChange}
      />
      <input
        type="password"
        placeholder="password"
        onChange={handlePasswordInputChange}
      />
      <button>Login</button>
    </form>
  );
}
