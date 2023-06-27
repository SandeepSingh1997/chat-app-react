import { useRef, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { v4 as uuid4 } from "uuid";

import { sendMessage } from "../../pages/Home/chatRoomSlice";

import Conversation from "./Conversation";

export default function Chat({ activeRoom }) {
  const messages = useSelector((state) =>
    state.chatRooms.filter((room) => room.id === activeRoom.id)
  )[0].messages;

  const dispatch = useDispatch();

  const [messageInput, setMessageInput] = useState<string>("");

  const handleSendMessage = () => {
    dispatch(
      sendMessage({
        roomId: activeRoom.id,
        message: { id: uuid4(), content: messageInput },
      })
    );
    setMessageInput("");
  };

  return (
    <section>
      <nav>chat room title : {activeRoom.title}</nav>
      <Conversation messages={messages} />
      <textarea
        value={messageInput}
        placeholder="type message"
        onChange={(e) => {
          setMessageInput(e.target.value);
        }}
      />
      <button onClick={handleSendMessage}>send</button>
    </section>
  );
}
