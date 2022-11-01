import {
  Button,
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import SendIcon from "@mui/icons-material/Send";
import React, { Fragment, useEffect, useState } from "react";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  toggleTodoComplete,
  updateNameTodo,
} from "../todoList/TodoListSlice";
import { updateTodoListActions } from "../../redux/todo-thunk-creator";
import { isChangeSelector } from "../../redux/selectors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#FFF",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

let isInitial = false;

function Todo({ id, name, completed }) {
  const [checked, setChecked] = useState(completed);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [updateTodo, setUpdateTodo] = useState(name);

  const dispatch = useDispatch();
  const isChanged = useSelector(isChangeSelector);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    // When user change data => update data to server.
    if (!isChanged) return;
    // Update state to server state
    dispatch(updateTodoListActions({ id, name, completed }));
  }, [dispatch, name, completed]);

  const handleToggle = () => {
    dispatch(toggleTodoComplete(id));
    setChecked((check) => !check);
  };
  //   handler delete one todo
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };
  const handleUpdateTodo = () => {
    console.log("update");
    setModalUpdate(true);
  };
  const handleClose = () => {
    setModalUpdate(false);
  };
  const handleUpdateTodoChange = (event) => {
    console.log(event.target.value);
    setUpdateTodo(event.target.value);
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    if (!window.confirm("Change name todo?")) {
      setUpdateTodo(name);
      return;
    }
    console.log("handle update");
    dispatch(updateNameTodo({ id, name: updateTodo }));
    setModalUpdate(false);
  };
  return (
    <Fragment>
      <ListItem disablePadding sx={{ pr: "12px" }}>
        <ListItemButton
          role={undefined}
          onClick={handleToggle}
          sx={{ textDecoration: checked ? "line-through" : "" }}
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={checked}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItemButton>
        <IconButton
          edge="end"
          aria-label="update"
          onClick={handleUpdateTodo}
          sx={{ mr: 1 }}
          modal={modalUpdate}
        >
          <ModeEditOutlinedIcon />
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={handleDeleteTodo}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </ListItem>
      {/* Update */}
      <Modal
        open={modalUpdate}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update todo
          </Typography>
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
              inputProps={{ "aria-label": "update todo" }}
              onChange={handleUpdateTodoChange}
              name="updateTodo"
              required
              autoFocus
              value={updateTodo}
            />
            <Button
              variant="contained"
              startIcon={<SendIcon />}
              type="submit"
              onClick={handleUpdate}
            >
              update
            </Button>
          </Box>
        </Box>
      </Modal>
    </Fragment>
  );
}

export default Todo;
