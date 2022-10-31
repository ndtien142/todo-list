import { configureStore } from "@reduxjs/toolkit";
import FiltersSlice from "../components/filters/FiltersSlice";
import TodoListSlice from "../components/todoList/TodoListSlice";

const store = configureStore({
  reducer: {
    todoList: TodoListSlice,
    filters: FiltersSlice,
  },
});

export default store;
