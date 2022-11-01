import { getTodosApi, updateTodoApi } from "../api/todosApi";
import { replaceTodos } from "../components/todoList/TodoListSlice";

// Create a thunk function to fetch todos from db
export const fetchTodoListActions = () => {
  return async (dispatch) => {
    try {
      const data = await getTodosApi();
      dispatch(replaceTodos(data));
    } catch (error) {
      // show error
      // Can using dispatch here to manager error state
      console.log(error);
    }
  };
};
// Update todo
export const updateTodoListActions = (data) => {
  return async (dispatch) => {
    try {
      console.log({ ...data });
      const result = await dispatch(updateTodoApi(data));
      console.log(result);
      // show succeed
    } catch (error) {
      console.log("Error: Connect to db is failed!");
    }
  };
};
