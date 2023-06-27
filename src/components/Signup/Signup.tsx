import { useRef, ChangeEvent } from "react";
import auth from "../../pages/Landing/firebaseAuth";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const emailInputRef = useRef<string>("");
  const passwordInputRef = useRef<string>("");
  const confirmPasswordInputRef = useRef<string>("");

  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    emailInputRef.current = e.target.value;
  };

  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    passwordInputRef.current = e.target.value;
  };

  const handleConfirmPasswordInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    confirmPasswordInputRef.current = e.target.value;
  };

  const signup = async () => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        emailInputRef.current,
        passwordInputRef.current
      );
      console.log("signed up user", userCredentials.user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignup = (e: MouseEvent) => {
    e.preventDefault();
    console.log(emailInputRef.current, passwordInputRef.current);
    signup();
  };

  return (
    <form>
      <input
        type="email"
        placeholder="email"
        onChange={handleEmailInputChange}
      />
      <input
        type="password"
        placeholder="password"
        onChange={handlePasswordInputChange}
      />
      <input
        type="password"
        placeholder="confirm password"
        onChange={handleConfirmPasswordInputChange}
      />
      <button onClick={handleSignup}>Signup</button>
    </form>
  );
}
