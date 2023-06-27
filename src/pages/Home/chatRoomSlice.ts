import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const chatRoomSlice = createSlice({
  name: "chatRoom",
  initialState,
  reducers: {
    create: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { create } = chatRoomSlice.actions;

export default chatRoomSlice.reducer;
