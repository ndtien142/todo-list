import { Button, List, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Todo from "../todo/Todo";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, replaceTodos } from "./TodoListSlice";
import { RemainingTodo, TodoListSelector } from "../../redux/selectors";
import { getTodosApiUseQuery } from "../../api/todosApi";
import { useQuery } from "@tanstack/react-query";

function TodoList() {
  const { data, isSuccess } = useQuery(["todos"], getTodosApiUseQuery);
  // Fetching without useQuery
  const dispatch = useDispatch();
  if (data && isSuccess) {
    console.log(data);
  }
  useEffect(() => {
    if (data && isSuccess) {
      console.log(data);
      dispatch(replaceTodos(data));
    }
  }, [data]);
  const [input, setInput] = useState("");
  const remainingTodo = useSelector(RemainingTodo);
  const allTodos = useSelector(TodoListSelector);
  const handleInputTodoChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") return;
    dispatch(addNewTodo({ name: input, completed: false, id: 6 }));
    setInput("");
    // setLatestId((id) => id + 1);
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
        {remainingTodo.map((todo) => {
          return (
            <Todo
              name={todo.name}
              completed={todo.completed}
              id={todo.id}
              key={todo.id}
              allTodos={allTodos}
            ></Todo>
          );
        })}
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
          >
            Add
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default TodoList;
