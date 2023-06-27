import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import chatRoomReducer from "./chatRoomSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    chatRooms: chatRoomReducer,
  },
});

export default store;
