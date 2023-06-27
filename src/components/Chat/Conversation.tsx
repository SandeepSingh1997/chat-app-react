export default function Conversation({ messages }) {
  const renderMessages = () => {
    return messages.map((message) => (
      <li key={message.id}>{message.content}</li>
    ));
  };

  return (
    <div>
      <ul>{renderMessages()}</ul>
    </div>
  );
}
