import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const chatRoomSlice = createSlice({
  name: "chatRoom",
  initialState,
  reducers: {
    create: (state, action) => {
      state.push(action.payload);
    },
    sendMessage: (state, action) => {
      const roomId: string = action.payload.roomId;
      const message = action.payload.message;
      state.find((room) => room.id === roomId).messages.push(message);
    },
  },
});

export const { create, sendMessage } = chatRoomSlice.actions;

export default chatRoomSlice.reducer;
