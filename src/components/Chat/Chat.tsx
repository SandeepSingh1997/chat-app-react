import Conversation from "./Conversation";

export default function Chat() {
  return (
    <section>
      <nav>chat name</nav>
      <Conversation />
      <textarea placeholder="type message" />
    </section>
  );
}
