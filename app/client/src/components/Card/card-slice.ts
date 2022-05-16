import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Connection, Edge, useReactFlow } from "react-flow-renderer";

export interface HandlerStack {
  [id: string]: {
    handleX: number;
    handleY: number;
    targetID: string;
    type: "target" | "source";
  }[];
}

interface CardInternals {
  handlers: HandlerStack;
  edge: Edge;
}

interface Handler {
  id: string;
  type: "target" | "source";
  targetID: string;
  handlerX: number;
  handlerY: number;
}

export const CardSlice = createSlice({
  name: "counter",
  initialState: {
    handlers: {} as HandlerStack,
    edge: {} as Edge,
  } as CardInternals,
  reducers: {
    rebuildHandlers(_, action: PayloadAction<HandlerStack>) {
      console.log(action.payload);
      return {
        handlers: action.payload,
        edge: {} as Edge,
      };
    },

    updateHandlers(
      state,
      action: PayloadAction<{
        handler: Handler;
      }>
    ) {
      console.log(action.payload);
      const newState = {
        ...state,
        handlers: {
          ...state.handlers,
          [action.payload.handler.id]: [
            ...(state.handlers[action.payload.handler.id] || []),
            {
              handleX: action.payload.handler.handlerX,
              handleY: action.payload.handler.handlerY,
              targetID: action.payload.handler.targetID,
              type: action.payload.handler.type,
            },
          ],
        },
      };
      // console.log(newState);
      return newState;
    },

    deleteHandlers(
      state,
      action: PayloadAction<{
        stack: string;
        id: string;
      }>
    ) {
      console.log("THE STACK IS:", state.handlers);
      console.log("THE ID IS:", action.payload.stack);
      const stackAfterHandlerRemoval = (
        state.handlers[action.payload.stack] || []
      ).filter((handler) => handler.targetID !== action.payload.id);

      console.log(stackAfterHandlerRemoval);

      return {
        ...state,
        handlers: {
          ...state.handlers,
          [action.payload.stack]: stackAfterHandlerRemoval,
        },
      };
    },

    createConnection(state, action: PayloadAction<Edge>) {
      return {
        ...state,
        edge: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateHandlers,
  rebuildHandlers,
  createConnection,
  deleteHandlers,
} = CardSlice.actions;

export default CardSlice.reducer;
