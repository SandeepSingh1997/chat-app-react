import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";

import LandingPage from "./pages/Landing/Landing";
import HomePage from "./pages/Home/Home";
import VideoChatPage from "./pages/Videochat/VideoChatPage";
import ErrorPage from "./pages/Error/ErrorPage";

import store from "./pages/Home/store";
import ChatPage from "./pages/temp/Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/home"
          element={
            <Provider store={store}>
              <HomePage />
            </Provider>
          }
        />

        <Route path="/video-chat" element={<VideoChatPage />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
