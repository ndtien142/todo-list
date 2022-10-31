import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  todos: [
    { id: 1, name: "Learn Redux", completed: false },
    { id: 2, name: "Learn Java", completed: true },
    { id: 3, name: "Learn JavScript", completed: false },
  ],
};

const TodoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addNewTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      // delete todo using id ==> action.payload is a todo id
      const todoIndex = state.todos.findIndex((tdo) => {
        return tdo.id === action.payload;
      });
      state.todos.splice(todoIndex, 1);
    },
    toggleTodoComplete: (state, action) => {
      // Define element by ID pass by action.payload
      state.todos.forEach((tdo) => {
        if (tdo.id === action.payload) {
          tdo.completed = !tdo.completed;
        }
      });
    },
    updateNameTodo: (state, action) => {
      state.todos.forEach((tdo) => {
        if (tdo.id === action.payload.id) {
          tdo.name = action.payload.name;
        }
      });
    },
  },
});

export const { addNewTodo, deleteTodo, toggleTodoComplete, updateNameTodo } =
  TodoListSlice.actions;
export default TodoListSlice.reducer;
