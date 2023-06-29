import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header/Header";
import ChatList from "../../components/ChatList/ChatList";
import Chat from "../../components/Chat/Chat";

import auth from "../Landing/firebaseAuth";
import { login } from "./userSlice";

export default function HomePage() {
  const dispatch = useDispatch();

  const [activeRoom, setActiveRoom] = useState();

  const currUser = useSelector((state) => state.user);



  useEffect(() => {
  
    const user = auth.currentUser;
    dispatch(login({ name: user.displayName, email: user.email }));
  });

  const handleSelectedRoom = (room) => {
    setActiveRoom(room);
  };

 

  if (!currUser.isLoggedIn) {
    return <h2>Loading...</h2>;
  } else {
    return (
      <>
        <Header />
        
        <main>
          <ChatList onSelectRoom={handleSelectedRoom} />
          {activeRoom && <Chat activeRoom={activeRoom} />}
        </main>{" "}
      </>
    );
  }
}
