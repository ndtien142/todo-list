import { Button, List, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Todo from "../todo/Todo";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo } from "./TodoListSlice";
import { RemainingTodo } from "../../redux/selectors";

function TodoList() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const remainingTodo = useSelector(RemainingTodo);
  const handleInputTodoChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") return;
    dispatch(addNewTodo({ id: 4, name: input, completed: false }));
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
        {remainingTodo.map((todo) => {
          return (
            <Todo
              name={todo.name}
              completed={todo.completed}
              id={todo.id}
              key={todo.id}
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
