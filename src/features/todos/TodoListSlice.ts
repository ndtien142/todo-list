import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoSliceState, TodoState } from '../../types/TypesOfTodo';

const initialState: TodoSliceState = {
  status: 'idle',
  todos: [],
  isChange: false,
  nextId: 0,
};

const TodoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    updateStatusSuccess: (
      state,
      action: PayloadAction<'succeed' | 'error' | 'idle' | 'loading'>
    ) => {
      state.status = 'succeed';
    },
    replaceNextId: (state, action: PayloadAction<number>) => {
      state.nextId = action.payload;
    },
    replaceTodos: (state, action: PayloadAction<TodoState[]>) => {
      const transArr: TodoState[] = [];
      for (let key in action.payload) {
        transArr.push(action.payload[key]);
      }
      state.todos = transArr;
    },
    addNewTodo: (state, action: PayloadAction<TodoState>) => {
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
    updateNameTodo: (state, action: PayloadAction<TodoState>) => {
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
