import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Layout from "../layout/Layout";

const About = () => {
  return (
    <Layout valuePage={1}>
      <Container sx={{ marginTop: 10 }}>
        <Typography variant="h1">This is about page</Typography>;
      </Container>
    </Layout>
  );
};

export default About;
