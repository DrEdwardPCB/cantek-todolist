import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { UpdateTodoListForm } from "./updateTodoListForm";
import { useState } from "react";
import { useTodo } from "../hooks/useTodo";
import { DeleteTodoListForm } from "./deleteTodoListForm";
import { EStage } from "./todoList";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Divider, IconButton } from "@mui/material";
export interface ITodoListItemMenuProps {
    id: string;
    title: string;
    description: string;
}
export const TodoListItemMenu = ({
    id,
    title,
    description,
}: ITodoListItemMenuProps) => {
    const { moveTo } = useTodo();
    const [showUpdate, setShowUpdate] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                id={`basic-button-${id}`}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <MenuIcon></MenuIcon>
            </IconButton>
            <Menu
                id={`basic-menu-${id}`}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": `basic-button-${id}`,
                }}
            >
                <MenuItem
                    onClick={() => {
                        setShowUpdate(true);
                        handleClose();
                    }}
                >
                    Update
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        setShowDelete(true);
                        handleClose();
                    }}
                >
                    Delete
                </MenuItem>
                <Divider></Divider>
                <MenuItem
                    onClick={() => {
                        moveTo(id, EStage.TODO);
                        handleClose();
                    }}
                >
                    Move to Todo
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        moveTo(id, EStage.INVESTIGATING);
                        handleClose();
                    }}
                >
                    Move to investigating
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        moveTo(id, EStage.INPROGRESS);
                        handleClose();
                    }}
                >
                    Move to in progress
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        moveTo(id, EStage.QA);
                        handleClose();
                    }}
                >
                    Move to qa
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        moveTo(id, EStage.DONE);
                        handleClose();
                    }}
                >
                    Move to done
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        moveTo(id, EStage.CANCEL);
                        handleClose();
                    }}
                >
                    Move to cancel
                </MenuItem>
            </Menu>
            <UpdateTodoListForm
                id={id}
                title={title}
                description={description}
                open={showUpdate}
                setClose={() => setShowUpdate(false)}
            ></UpdateTodoListForm>
            <DeleteTodoListForm
                id={id}
                title={title}
                open={showDelete}
                setClose={() => setShowDelete(false)}
            ></DeleteTodoListForm>
        </div>
    );
};
