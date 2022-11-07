import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

const SKELETON: number[] = [1, 2, 3];

const TodosLoading = () => {
  return (
    <Box>
      {SKELETON.map((index: number) => (
        <Grid container spacing={2} key={index} mb={3}>
          <Grid item xs={2} pr={2}>
            <Skeleton height={40} width={30} />
          </Grid>
          <Grid item xs={7}>
            <Skeleton height={40} />
          </Grid>
          <Grid item xs={1} mr={2}>
            <Skeleton height={40} width={30} />
          </Grid>
          <Grid item xs={1}>
            <Skeleton height={40} width={30} />
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default TodosLoading;
