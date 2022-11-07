import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodosState {
    id: string | number;
    name: string;
    completed: boolean;
}

export interface TodoListState{
    status: "idle" | "succeed" | "loading" | "error";
    todos: TodosState[];
    isChange: boolean;
    nextId: number | 0
}

const initialState: TodoListState = {
  status: "idle",
  todos: [],
  isChange: false,
  nextId: 0,
};

const TodoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    updateStatusSuccess: (state, action: PayloadAction<"succeed" | "error" | "idle" | "loading">) => {
      state.status = "succeed";
    },
    replaceNextId: (state, action: PayloadAction<number>) => {
      state.nextId = action.payload;
    },
    replaceTodos: (state, action: PayloadAction<TodosState[]>) => {
      const transArray = { ...action.payload };
      for (let key in transArray) {
        state.todos.push(transArray[key]);
      }
    },
    addNewTodo: (state, action: PayloadAction<TodosState>) => {
      state.isChange = true;
      state.todos.push(action.payload);
      state.nextId = state.nextId + 1;
    },
    deleteTodo: (state, action: PayloadAction<number | string>) => {
      state.isChange = true;
      // delete todo using id ==> action.payload is a todo id
      const todoIndex = state.todos.findIndex((tdo) => {
        return tdo.id === action.payload;
      });
      state.todos.splice(todoIndex, 1);
    },
    toggleTodoComplete: (state, action: PayloadAction<number | string>) => {
      state.isChange = true;
      // Define element by ID pass by action.payload
      state.todos.forEach((tdo) => {
        if (tdo.id === action.payload) {
          tdo.completed = !tdo.completed;
        }
      });
    },
    updateNameTodo: (state, action: PayloadAction<TodosState>) => {
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
