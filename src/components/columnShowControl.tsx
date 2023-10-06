import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useTodo } from "../hooks/useTodo";
import { EStage } from "./todoList";

export default function ColumnShowControl() {
    const { todo, toggleColumnVisibility } = useTodo();
    return (
        <FormGroup row>
            {Object.entries(EStage).map(([key, val]) => {
                return (
                    <FormControlLabel
                        key={key}
                        control={
                            <Checkbox
                                checked={!todo[val].hidden}
                                onChange={() => toggleColumnVisibility(val)}
                            />
                        }
                        label={`show ${val}`}
                    />
                );
            })}
        </FormGroup>
    );
}
