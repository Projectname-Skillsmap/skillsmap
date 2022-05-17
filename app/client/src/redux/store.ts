import { configureStore } from "@reduxjs/toolkit";
import card from "@components/Card/card-slice";
import changes from "@src/changes/changes";
import curtain from "src/components/Curtain/curtain-slice";
import saveChanges from "@widgets/SaveChanges/save-change.slice";
import customizeCard from "@widgets/CustomizeCard/customize-card.slice";
import newCard from "@components/Toolbar/Buttons/Add-Card/add-card.slice";

export const store = configureStore({
  reducer: {
    card,
    changes,
    curtain,
    saveChanges,
    customizeCard,
    newCard,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
