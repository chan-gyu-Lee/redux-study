import { configureStore, createSlice } from "@reduxjs/toolkit";

interface Istate {
  text: string;
  id: string;
}

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [] as Istate[],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now().toString() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

const counter = createSlice({
  name: "counterReducer",
  initialState: 0,
  reducers: {
    plus: (state, action) => state + action.payload,
    minus: (state, action) => state - action.payload,
  },
});

const store = configureStore({
  reducer: {
    toDosReducer: toDos.reducer,
    conuterReducer: counter.reducer,
  },
});

export const { add, remove } = toDos.actions;
export const { minus, plus } = counter.actions;

export default store;

export type RootState = ReturnType<typeof store.getState>;
