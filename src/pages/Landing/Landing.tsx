import { useState } from "react";

import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

function LandingPage() {
  const [login, setLogin] = useState<Boolean>(true);

  return (
    <main>
      <section>Signup or Login</section>
      <section>
        <div>
          <button
            onClick={() => {
              setLogin(true);
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setLogin(false);
            }}
          >
            Signup
          </button>
        </div>
        {login && <Login />}
        {!login && <Signup />}
      </section>
    </main>
  );
}

export default LandingPage;
