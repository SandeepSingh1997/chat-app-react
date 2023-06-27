import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import LandingPage from "./pages/Landing/Landing";
import HomePage from "./pages/Home/Home";
import VideoChatPage from "./pages/Videochat/VideoChatPage";
import ErrorPage from "./pages/Error/ErrorPage";

import auth from "./pages/Landing/firebaseAuth";
import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is logged in");
  } else {
    console.log("user is logged out");
  }
});

onAuthStateChanged;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/video-chat" element={<VideoChatPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
