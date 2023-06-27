import { useState } from "react";
import { Provider } from "react-redux";

import Header from "../../components/Header/Header";
import ChatList from "../../components/ChatList/ChatList";
import Chat from "../../components/Chat/Chat";

import store from "./store";

export default function HomePage() {
  const [activeRoom, setActiveRoom] = useState();

  const handleSelectedRoom = (room) => {
    setActiveRoom(room);
  };

  return (
    <Provider store={store}>
      <Header />
      <main>
        <ChatList onSelectRoom={handleSelectedRoom} />
        {activeRoom && <Chat activeRoom={activeRoom} />}
      </main>
    </Provider>
  );
}
