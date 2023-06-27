import { Provider } from "react-redux";

import Header from "../../components/Header/Header";
import ChatList from "../../components/ChatList/ChatList";
import Chat from "../../components/Chat/Chat";

import store from "./store";

export default function HomePage() {
  return (
    <Provider store={store}>
      <Header />
      <main>
        <ChatList />
        <Chat />
      </main>
    </Provider>
  );
}
