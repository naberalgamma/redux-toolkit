import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    count: 0,
    todos: ["234", "wesd"],
  },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    addTodo(state, actions) {
      state.todos.push(actions.payload);
    },
    removeTodo(state) {
      state.todos.pop();
    },
  },
});
export default toolkitSlice.reducer;
export const { increment, decrement, addTodo, removeTodo } =
  toolkitSlice.actions;
