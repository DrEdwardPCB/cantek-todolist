import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
} from "@mui/material";
import { useTodo } from "../hooks/useTodo";

export interface IDeleteTodoListForm {
    open: boolean;
    setClose: () => void;
    id: string;
    title: string;
}
export const DeleteTodoListForm = (props: IDeleteTodoListForm) => {
    const { removeTodo } = useTodo();
    return (
        <>
            <Dialog open={props.open} onClose={props.setClose}>
                <DialogTitle>Delete todo item</DialogTitle>
                <DialogContent>
                    you are about to delete todo item <span>{props.title}</span>
                    , press confirm if you want to delete it
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            removeTodo(props.id);
                        }}
                    >
                        confirm
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                            props.setClose();
                        }}
                    >
                        {" "}
                        cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
