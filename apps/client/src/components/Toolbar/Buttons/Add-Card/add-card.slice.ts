import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardPayload } from '@utils/card';
import { Node } from 'react-flow-renderer';
const addCardSlice = createSlice({
  initialState: {} as Node<CardPayload>,
  name: 'add-card',
  reducers: {
    createNodeFrom(_, action: PayloadAction<Node<CardPayload>>) {
      return action.payload;
    },
  },
});

export default addCardSlice.reducer;
export const { createNodeFrom } = addCardSlice.actions;
