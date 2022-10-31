import { Box, Typography } from "@mui/material";
import Filters from "./components/filters/Filters";
import TodoList from "./components/todoList/TodoList";
import { styled } from "@mui/system";

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

function App() {
  return (
    <MyContainer>
      <Box borderRadius={2} px={2} py={1} bgcolor="#FFF">
        <Typography variant="h3" textAlign="center" mb={2}>
          Todo List
        </Typography>
        <Filters />
        <TodoList />
      </Box>
    </MyContainer>
  );
}

export default App;
