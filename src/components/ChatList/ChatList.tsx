import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { create as createRoom } from "../../pages/Home/chatRoomSlice";

export default function ChatList() {
  const chatRooms = useSelector((state) => state.chatRooms);
  const dispatch = useDispatch();

  const createChatRoomInputRef = useRef<string>("");

  const getChatList = () => {
    return chatRooms.map((chatRoom) => <li>{chatRoom}</li>);
  };

  const handleCreateChatRoom = (e: MouseEvent) => {
    dispatch(createRoom(createChatRoomInputRef.current));
  };

  return (
    <section>
      <input placeholder="search" type="text" />
      <ul type="none">{getChatList()}</ul>
      <input
        type="text"
        placeholder="new chat room"
        onChange={(e) => {
          createChatRoomInputRef.current = e.target.value;
        }}
      />
      <button onClick={handleCreateChatRoom}>create</button>
    </section>
  );
}
