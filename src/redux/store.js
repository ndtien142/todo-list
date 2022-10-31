import { configureStore } from "@reduxjs/toolkit";
import TodoListSlice from "../components/todoList/TodoListSlice";

const store = configureStore({
  reducer: {
    todoList: TodoListSlice,
  },
});

export default store;
