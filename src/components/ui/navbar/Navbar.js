import {
  AppBar,
  Button,
  Grid,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import DrawerComp from "./DrawerComp";

const DUMMY_LINKS = ["Todo List", "About", "Services"];

function Navbar() {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar>
      <Toolbar>
        {!isMatch && (
          <Grid container sx={{ placeItems: "center" }}>
            <Grid item xs={2}>
              <Typography component="span">
                <FactCheckIcon />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Tabs
                textColor="inherit"
                indicatorColor="secondary"
                value={value}
                onChange={handleChangeTab}
              >
                {DUMMY_LINKS.map((link, index) => (
                  <Tab label={link} key={index}></Tab>
                ))}
              </Tabs>
            </Grid>
            <Grid xs={1} item />
            <Grid item xs={3}>
              <Box display="flex">
                <Button variant="contained" sx={{ marginLeft: "auto" }}>
                  Login
                </Button>
                <Button variant="contained" sx={{ marginLeft: 1 }}>
                  Signup
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
        {isMatch && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
          >
            <Typography component="span">
              <FactCheckIcon />
            </Typography>
            <DrawerComp links={DUMMY_LINKS} sx={{ marginLeft: "auto" }} />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
