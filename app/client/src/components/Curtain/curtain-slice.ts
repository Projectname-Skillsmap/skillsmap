import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const curtainSlice = createSlice({
  initialState: "web",
  name: "curtain",
  reducers: {
    changeLevel(_, action: PayloadAction<string>) {
      return action.payload;
    },
  },
});

export default curtainSlice.reducer;
export const { changeLevel } = curtainSlice.actions;
