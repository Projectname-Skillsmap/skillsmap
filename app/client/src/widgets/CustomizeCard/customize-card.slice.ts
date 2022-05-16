import { createSlice } from "@reduxjs/toolkit";

const customizeCardSlice = createSlice({
  initialState: {
    visible: false,
  },
  name: "customize-card",
  reducers: {
    open: () => {
      return {
        visible: true,
      };
    },
    close: () => {
      return {
        visible: false,
      };
    },
  },
});

export default customizeCardSlice.reducer;
export const { close, open } = customizeCardSlice.actions;
export const name = customizeCardSlice.name;
