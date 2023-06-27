import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../pages/Home/userSlice";

export default function Header() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout);
  };

  return (
    <header>
      <figure>
        <img alt="profile-picture" />
        <span>{user.name}</span>
      </figure>
      {user.isLoggedIn ? null : <button onClick={handleLogout}>logout</button>}
    </header>
  );
}
