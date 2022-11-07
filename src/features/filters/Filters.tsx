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
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { searchFilterChange, statusFilterChange } from "./FiltersSlice";
import _debounce from 'lodash/debounce';

function Filters() {
    const [statusFilter, setStatusFilter] = useState("All");
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch()
    console.log(statusFilter)
    // Clear filter when component unmounted
    useEffect(() => {
        return () => {
            dispatch(searchFilterChange(""))
        }
    }, [dispatch])

    const handleSearchFilterChange = _debounce((value: any) => {
        // setSearchFilter(inputRef.current ? inputRef.current.value : "")
        dispatch(searchFilterChange(inputRef.current ? inputRef.current.value : ""))
    }, 500);
    const handleStatusFilterChange = (event: any) => {
        setStatusFilter(event.target.value);
        dispatch(statusFilterChange(event.target.value))
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
                    inputRef={inputRef}
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
