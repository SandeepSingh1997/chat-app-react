import { FormEvent, ChangeEvent, useRef } from "react";

export default function Login() {
  const emailInputRef = useRef<string>("");
  const passwordInputRef = useRef<string>("");

  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    emailInputRef.current = e.target.value;
  };

  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    passwordInputRef.current = e.target.value;
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
