import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Change {
  type: "ADD" | "DELETE" | "MODIFY";
  entity: "node" | "edge";
  id: string;
}

const ChangeSlice = createSlice({
  initialState: [] as Change[],
  name: "Change",
  reducers: {
    recordChange(state, action: PayloadAction<Change>) {
      console.log({
        id: action.payload.id,
        type: action.payload.type,
      });
      return [
        ...state,
        {
          id: action.payload.id,
          type: action.payload.type,
          entity: action.payload.entity,
        },
      ];
    },

    deleteChangeHistory() {
      console.log("RETURN EMPTY");
      return [];
    },
  },
});

export default ChangeSlice.reducer;
export const { recordChange, deleteChangeHistory } = ChangeSlice.actions;
