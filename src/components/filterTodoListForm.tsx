import { TextField } from "@mui/material";
import { useGlobalFilter } from "../hooks/useGlobalFilter";

export const FilterTodoListForm = () => {
    const { filter, setFilter } = useGlobalFilter();
    return (
        <TextField
            label="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            helperText="this filter is based on text match on title"
        ></TextField>
    );
};
