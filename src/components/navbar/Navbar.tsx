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
import { Link as RouteLink } from "react-router-dom";


const DUMMY_LINKS: string[][] = [
  ["Todo List", "home"],
  ["About", "about"],
  ["Services", "service"],
];

const Navbar: React.FC<{ valuePage: number }> = (props) => {
  const [value, setValue] = useState(props.valuePage);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const handleChangeTab = (event: any, newValue: number) => {
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
                  <Tab
                    label={link[0]}
                    key={index}
                    component={RouteLink}
                    to={`/${link[1]}`}
                    disabled={index === 2 ? true : false}
                  ></Tab>
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
            <DrawerComp links={DUMMY_LINKS} />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
