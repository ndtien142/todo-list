import { configureStore } from "@reduxjs/toolkit";
import FiltersSlice from "../features/filters/FiltersSlice";
import TodoListSlice from "../features/todos/TodoListSlice";

const storeWTS = configureStore({
    reducer: {
        todoList: TodoListSlice,
        filters: FiltersSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof storeWTS.getState>
// Inferred type: {todoList: TodoListSlice, filters: FiltersSlice}
export type AppDispatch = typeof storeWTS.dispatch

export default storeWTS;
