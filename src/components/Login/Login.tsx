import { FormEvent, ChangeEvent, useState, useEffect } from "react";

import * as ActionCreator from "../../actionCreator";
import store from "../../store";

export default function Login() {
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    store.dispatch(
      ActionCreator.userLogin({ name: emailInput, email: passwordInput })
    );
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
