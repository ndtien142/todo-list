import { Box, Typography } from "@mui/material";
import React from "react";
import Filters from "../../components/filters/Filters";
import TodoList from "../../components/todoList/TodoList";
import { styled } from "@mui/system";
import Layout from "../layout/Layout";

const MyContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: "24px",
  paddingRight: "24px",
  height: "100vh",
  backgroundColor: "#eee",
});

const Todos = () => {
  return (
    <Layout valuePage={0}>
      <MyContainer>
        <Box borderRadius={2} px={2} py={1} bgcolor="#FFF">
          <Typography variant="h3" textAlign="center" mb={2}>
            Todo List
          </Typography>
          <Filters />
          <TodoList />
        </Box>
      </MyContainer>
    </Layout>
  );
};

export default Todos;
