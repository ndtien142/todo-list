import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  status: "All",
};

const FiltersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { searchFilterChange, statusFilterChange } = FiltersSlice.actions;
export default FiltersSlice.reducer;
