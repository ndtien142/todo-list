import { Button, List, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Todo from "../todo/Todo";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewTodo,
  replaceNextId,
  replaceTodos,
  updateStatusSuccess,
} from "./TodoListSlice";
import {
  nextIdSelector,
  RemainingTodo,
  StatusTodosSelector,
} from "../../redux/selectors";
import {
  addNewTodosApiUseQuery,
  getNextIdApiUseQuery,
  getTodosApiUseQuery,
  updateNextIdApiUseQuery,
} from "../../api/todosApiWithUseQuery";
import { useMutation, useQuery } from "@tanstack/react-query";
import TodosLoading from "../ui/loading/TodosLoading";

function TodoList() {
  const statusTodos = useSelector(StatusTodosSelector);
  const [input, setInput] = useState("");
  const remainingTodo = useSelector(RemainingTodo);
  const reduxNextId = useSelector(nextIdSelector);
  const {
    data: todos,
    isSuccess: todosIsSuccess,
    isLoading,
  } = useQuery(["todos"], getTodosApiUseQuery);
  const { data: nextId, isSuccess: nextIdSuccess } = useQuery(
    ["nextId"],
    getNextIdApiUseQuery
  );
  const { isLoading: updateTodosIsLoading, mutate: mutateTodos } = useMutation(
    addNewTodosApiUseQuery
  );
  const { mutate: mutateNextId } = useMutation(updateNextIdApiUseQuery);
  // Fetching with useQuery
  const dispatch = useDispatch();
  useEffect(() => {
    // Dispatch data to Redux
    if (todos && todosIsSuccess && statusTodos === "idle") {
      dispatch(replaceTodos(todos));
      dispatch(updateStatusSuccess());
    }
  }, [todos, todosIsSuccess, dispatch, statusTodos]);

  useEffect(() => {
    if (nextIdSuccess && nextId) {
      dispatch(replaceNextId(nextId));
    }
  }, [nextId, dispatch, nextIdSuccess]);

  // Handle
  const handleInputTodoChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "" && reduxNextId) return;
    mutateTodos({
      name: input,
      completed: false,
      id: reduxNextId ? reduxNextId : 0,
    });
    mutateNextId(reduxNextId + 1);
    dispatch(
      addNewTodo({
        name: input,
        completed: false,
        id: reduxNextId ? reduxNextId : 0,
      })
    );
    setInput("");
  };
  return (
    <Box minWidth={400}>
      <List
        sx={{
          width: "100%",
          minWidth: 400,
          bgcolor: "background.paper",
          mb: 3,
          overflow: "auto",
          height: "200px",
        }}
      >
        {!isLoading &&
          remainingTodo.map((todo) => {
            return (
              <Todo
                name={todo.name}
                completed={todo.completed}
                id={todo.id}
                key={todo.id}
              ></Todo>
            );
          })}
        {isLoading && <TodosLoading />}
      </List>
      <Box>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          display="flex"
          justifyContent="space-between"
          gap={2}
        >
          <TextField
            sx={{ ml: 1, flex: 1 }}
            placeholder="Add new todo"
            inputProps={{ "aria-label": "add new todo" }}
            onChange={handleInputTodoChange}
            name="name"
            required
            autoFocus
            value={input}
          />
          <Button
            variant="contained"
            startIcon={<SendIcon />}
            type="submit"
            onClick={handleSubmit}
            disabled={updateTodosIsLoading}
          >
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default TodoList;
