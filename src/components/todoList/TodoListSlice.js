import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  todos: [],
  isChange: false,
  nextId: null,
};

const TodoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    updateStatusSuccess: (state, action) => {
      state.status = "success";
    },
    replaceNextId: (state, action) => {
      state.nextId = action.payload;
    },
    replaceTodos: (state, action) => {
      const transArray = { ...action.payload };
      for (let key in transArray) {
        state.todos.push(transArray[key]);
      }
    },
    addNewTodo: (state, action) => {
      state.isChange = true;
      state.todos.push(action.payload);
      state.nextId = state.nextId + 1;
    },
    deleteTodo: (state, action) => {
      state.isChange = true;
      // delete todo using id ==> action.payload is a todo id
      const todoIndex = state.todos.findIndex((tdo) => {
        return tdo.id === action.payload;
      });
      state.todos.splice(todoIndex, 1);
    },
    toggleTodoComplete: (state, action) => {
      state.isChange = true;
      // Define element by ID pass by action.payload
      state.todos.forEach((tdo) => {
        if (tdo.id === action.payload) {
          tdo.completed = !tdo.completed;
        }
      });
    },
    updateNameTodo: (state, action) => {
      state.isChange = true;
      state.todos.forEach((tdo) => {
        if (tdo.id === action.payload.id) {
          tdo.name = action.payload.name;
        }
      });
    },
  },
});

export const {
  addNewTodo,
  deleteTodo,
  toggleTodoComplete,
  updateNameTodo,
  replaceTodos,
  replaceNextId,
  updateStatusSuccess,
} = TodoListSlice.actions;
export default TodoListSlice.reducer;
