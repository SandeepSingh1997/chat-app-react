import { useState } from "react";
import { ChangeEvent } from "react";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form>
      <input type="text" placeholder="email" onChange={handlePasswordChange} />
      <input
        type="password"
        placeholder="password"
        onChange={handleEmailChange}
      />
      <button>Login</button>
    </form>
  );
}
