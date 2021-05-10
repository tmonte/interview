import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface User {
  readonly name: string;
  readonly phone: string;
}

interface UserState {
  readonly sorting: "asc" | "desc";
  readonly items: Array<User>;
}

const initialState: UserState = {
  sorting: "asc",
  items: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.items.push(action.payload);
    },
    toggleSorting: (state) => {
      if (state.sorting === "asc") {
        state.sorting = "desc";
      } else {
        state.sorting = "asc";
      }
    },
  },
});

export const { addUser, toggleSorting } = userSlice.actions;

export const selectUsers = (state: RootState) => state.user.items;

export const selectSorting = (state: RootState) => state.user.sorting;

export const selectSortedUsers = (state: RootState) => {
  const { sorting, items } = state.user;
  const sortByName = (a: User, b: User) => {
    const multiplier = sorting === "asc" ? 1 : -1;
    return a.name >= b.name ? 1 * multiplier : -1 * multiplier;
  };
  return items.slice().sort(sortByName);
};

export const reducer = userSlice.reducer;
