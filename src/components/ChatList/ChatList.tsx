import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { v4 as uuid4 } from "uuid";

import { create as createRoom } from "../../pages/Home/chatRoomSlice";

export default function ChatList({ onSelectRoom }) {
  const chatRooms = useSelector((state) => state.chatRooms);
  const dispatch = useDispatch();
  const [roomNameInput, setRoomNameInput] = useState<string>("");

  const getChatList = () => {
    return chatRooms.map((chatRoom) => (
      <li
        key={chatRoom.id}
        onClick={() => {
          onSelectRoom(chatRoom);
        }}
      >
        {chatRoom.title}
      </li>
    ));
  };

  const handleCreateChatRoom = (e: MouseEvent) => {
    const newRoom = {
      id: uuid4(),
      title: roomNameInput,
      messages: [],
    };
    dispatch(createRoom(newRoom));
    setRoomNameInput("");
  };

  return (
    <section>
      <input placeholder="search" type="text" />
      <ul>{getChatList()}</ul>
      <input
        value={roomNameInput}
        type="text"
        placeholder="new chat room"
        onChange={(e) => {
          setRoomNameInput(e.target.value);
        }}
      />
      <button onClick={handleCreateChatRoom}>create</button>
    </section>
  );
}
