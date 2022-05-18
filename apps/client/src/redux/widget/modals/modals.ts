import { store } from 'src/redux/store';
import { Action, PayloadAction } from '@reduxjs/toolkit';
import { name as saveChangesName } from 'src/widgets/SaveChanges/save-change.slice';
import { name as CustomizeCardName } from 'src/widgets/CustomizeCard/customize-card.slice';

const availableWidgets = [saveChangesName, CustomizeCardName] as const;
export type Widgets = typeof availableWidgets[number];

export const openModal = <T>(modal: Widgets, payload?: T) => {
  store.dispatch({
    type: `${modal}/open`,
    payload,
  } as PayloadAction<T>);
};

export const closeModal = (modal: Widgets) => {
  store.dispatch({
    type: `${modal}/close`,
  } as Action);
};
