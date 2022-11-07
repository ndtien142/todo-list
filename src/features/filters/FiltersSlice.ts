import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export interface FilterState {
    search:string;
    status: "All" | "Completed" | "Todo"
}

const initialState: FilterState = {
  search: "",
  status: "All",
};

const FiltersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    searchFilterChange: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action: PayloadAction<"All" | "Completed" | "Todo">) => {
      state.status = action.payload;
    },
  },
});

export const { searchFilterChange, statusFilterChange } = FiltersSlice.actions;
export const selectSearchFilter = (state: RootState) => state.filters.search
export const selectStatusFilter = (state: RootState) => state.filters.status
export default FiltersSlice.reducer;
