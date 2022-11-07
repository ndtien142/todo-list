import { Box, Typography } from "@mui/material";
import TodoList from "../features/todos/TodoListWTS";
import { styled } from "@mui/system";
import Layout from "../layouts/Layout";
import Filters from "../features/filters/Filters";

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