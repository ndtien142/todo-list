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
// Update all todo
export const updateTodoListActions = (data) => {
  return async (dispatch) => {
    try {
      console.log({ ...data });
      const result = await dispatch(updateTodoApi(data));
      console.log(result);
      // show succeed
    } catch (error) {
      // Tại sao dữ liệu ở database cập nhật đúng mà ở đây lại báo lỗi
      console.log("Error: Connect to db is failed!");
    }
  };
};
