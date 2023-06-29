import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { signOut } from "firebase/auth";

import auth from "../../pages/Landing/firebaseAuth";

export default function Header() {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  const signout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("user can't sign out");
    }
  };

  const handleLogout = () => {
    signout();
  };

  return (
    <header>
      <figure>
        <img alt="profile-picture" />
        <span>{user.email}</span>
      </figure>
      {user.isLoggedIn ? <button onClick={handleLogout}>logout</button> : null}
    </header>
  );
}
