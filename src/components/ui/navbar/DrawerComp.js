import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)} anchor="left">
        <Box>
          <List>
            {links.map((link, index) => {
              return (
                <ListItemButton key={index}>
                  <ListItem>
                    <ListItemText primary={link} />
                  </ListItem>
                </ListItemButton>
              );
            })}
          </List>
          <Divider />
          <List>
            <ListItemButton>
              <ListItem>
                <ListItemText primary="Login" />
              </ListItem>
            </ListItemButton>
            <ListItemButton>
              <ListItem>
                <ListItemText primary="Signup" />
              </ListItem>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <IconButton onClick={() => setOpen(true)} color="inherit">
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
