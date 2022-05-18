import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const saveChangesSlice = createSlice({
  initialState: { visible: false, levelID: '' },
  name: 'save-changes',
  reducers: {
    open(_, action: PayloadAction<string>) {
      console.log('PASSED');
      return {
        visible: true,
        levelID: action.payload,
      };
    },
    close() {
      return {
        visible: false,
        levelID: '',
      };
    },
  },
});

export default saveChangesSlice.reducer;
export const { close, open } = saveChangesSlice.actions;
export const name = saveChangesSlice.name;
