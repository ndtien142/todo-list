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
import React, { Fragment, useState } from "react";
import { Box } from "@mui/system";

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

function Todo({ id, name, completed }) {
  const [checked, setChecked] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);

  const handleToggle = () => {
    setChecked((check) => !check);
  };
  const handleDeleteTodo = () => {
    console.log("delete...");
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
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    console.log("handle update");
    setModalUpdate(false);
  };
  return (
    <Fragment>
      <ListItem disablePadding>
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
        </ListItemButton>
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
            />
            <Button
              variant="contained"
              startIcon={<SendIcon />}
              type="submit"
              onClick={handleUpdate}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
    </Fragment>
  );
}

export default Todo;
