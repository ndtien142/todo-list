import { Button, List, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";
import React from "react";
import Todo from "../todo/Todo";

const DUMMY_TODO = [
  { id: 1, name: "Learn Redux", completed: false },
  { id: 2, name: "Learn Java", completed: true },
  { id: 3, name: "Learn JavScript", completed: false },
];

function TodoList() {
  const handleInputTodoChange = (event) => {
    console.log(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit...");
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
        {DUMMY_TODO.map((todo) => {
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
            name="newTodo"
            required
            autoFocus
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
