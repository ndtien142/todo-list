import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Layout from "../layouts/Layout";
import Filters from "../features/filters/Filters";
import Todos from "../features/todos";

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

const Home = () => {
  return (
    <Layout valuePage={0}>
      <MyContainer>
        <Box borderRadius={2} px={2} py={1} bgcolor="#FFF">
          <Typography variant="h3" textAlign="center" mb={2}>
            Todo List
          </Typography>
          <Filters />
          <Todos />
        </Box>
      </MyContainer>
    </Layout>
  );
};

export default Home;
