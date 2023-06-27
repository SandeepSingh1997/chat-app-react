import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { FormEvent, ChangeEvent, useRef } from "react";
import auth from "../../pages/Landing/firebaseAuth";

export default function Login() {
  const emailInputRef = useRef<string>("");
  const passwordInputRef = useRef<string>("");

  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    emailInputRef.current = e.target.value;
  };

  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    passwordInputRef.current = e.target.value;
  };

  const login = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        emailInputRef.current,
        passwordInputRef.current
      );
      console.log(userCredentials.user);
    } catch (error) {
      console.log(error);
    }
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
