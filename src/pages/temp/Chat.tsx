import { useState, useRef } from "react";

const ChatPage = () => {
  let webSocketRef = useRef();
  const [connected, setConnected] = useState(false);
  const [data, setData] = useState([]);

  const usernameRef = useRef(null);
  const messageRef = useRef(null);

  const handleJoin = () => {
    const webSocket = webSocketRef.current;
    if (connected) {
      alert("User has already joined");
    } else {
      webSocketRef.current = new WebSocket(
        `ws://localhost:8085?username=${usernameRef.current.value}`
      );

      let ws = webSocketRef.current;

      ws.onopen = () => {
        alert("connected");
      };

      ws.onmessage = (message) => {
        setData((prevData) => [...prevData, message.data]);
      };

      setConnected(true);
      usernameRef.current.value = "";
    }
  };

  const handleSend = () => {
    const ws = webSocketRef.current;
    ws.send(messageRef.current.value);
    messageRef.current.value = "";
  };

  return (
    <div>
      <input ref={usernameRef} placeholder="username" />
      <button onClick={handleJoin}>join</button>
      <br />
      {connected ? (
        <>
          <ul>
            {data.map((msg) => (
              <li>{msg}</li>
            ))}
          </ul>
          <input ref={messageRef} type="text" placeholder="chat" />
          <button onClick={handleSend}>send</button>
        </>
      ) : null}
    </div>
  );
};

export default ChatPage;
