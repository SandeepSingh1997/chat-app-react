import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB49kSXbwBb92wINfzEMepOZZcy29wVFL4",
  authDomain: "chat-app-8afff.firebaseapp.com",
  projectId: "chat-app-8afff",
  storageBucket: "chat-app-8afff.appspot.com",
  messagingSenderId: "17311101806",
  appId: "1:17311101806:web:71d89a4959807a1c2a477f",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
