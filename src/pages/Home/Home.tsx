import Header from "../../components/Header/Header";
import ChatList from "../../components/ChatList/ChatList";
import Chat from "../../components/Chat/Chat";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <ChatList />
        <Chat />
      </main>
    </>
  );
}
