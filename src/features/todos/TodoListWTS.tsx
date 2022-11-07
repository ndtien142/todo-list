import { Button, List, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Todo from "./Todo";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addNewTodo } from "./TodoListSlice";
import { RemainningTodo } from "../../services/RemainingTodo";


function TodoList() {
    const [input, setInput] = useState("");
    const TodoList = useAppSelector(RemainningTodo)
    const dispatch = useAppDispatch();
    // Handle
    const handleInputTodoChange = (event: any) => {
        setInput(event.target.value);
    };
    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (input.trim() === "") return;
        dispatch(addNewTodo({ id: 2, name: input, completed: false }))
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
                {TodoList.map((todo) => {
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
