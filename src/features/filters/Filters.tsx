import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputBase,
    Radio,
    RadioGroup,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

function Filters() {
    const [searchFilter, setSearchFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const handleSearchFilterChange = (event: any) => {
        setSearchFilter(event.target.value);
    };
    const handleStatusFilterChange = (event: any) => {
        setStatusFilter(event.target.value);
    };
    return (
        <Box minWidth={350} bgcolor="#fff">
            <Box mb={2}>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Todo"
                    inputProps={{ "aria-label": "search Todo" }}
                    onChange={handleSearchFilterChange}
                    fullWidth
                    startAdornment={<SearchOutlinedIcon sx={{ mr: 2 }} />}
                    value={searchFilter}
                />
            </Box>
            <Divider />
            <FormControl sx={{ mt: 2 }}>
                <FormLabel id="status">Filter by status</FormLabel>
                <RadioGroup
                    aria-labelledby="status"
                    defaultValue="All"
                    name="status"
                    sx={{ flexDirection: "row", gap: 2 }}
                    onChange={handleStatusFilterChange}
                >
                    <FormControlLabel value="All" control={<Radio />} label="All" />
                    <FormControlLabel
                        value="Completed"
                        control={<Radio />}
                        label="Completed"
                    />
                    <FormControlLabel value="Todo" control={<Radio />} label="Todo" />
                </RadioGroup>
            </FormControl>
        </Box>
    );
}

export default Filters;
