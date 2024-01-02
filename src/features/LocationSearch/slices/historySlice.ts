import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LocationItem } from "../types";
import { findHistoryExistingItemId } from "../utils/historyFilters";

type HistoryState = {
  items: LocationItem[];
};

const initialState: HistoryState = {
  items: [],
};

const historySlice = createSlice({
  name: "history",
  initialState: initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<LocationItem>) => {
      const itemIndex = findHistoryExistingItemId(state.items, action.payload);

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        state.items.splice(itemIndex, 1);
        state.items.unshift(item);
      } else {
        state.items.unshift(action.payload);
      }
    },

    removeFromHistory: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex(
        (item: LocationItem) => item.id === action.payload
      );
      state.items.splice(itemIndex, 1);
    },
  },
});

export const { addToHistory, removeFromHistory } = historySlice.actions;
export default historySlice.reducer;
