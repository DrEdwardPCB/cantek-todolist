import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTodo } from "../hooks/useTodo";
const updateFormSchema = z.object({
    title: z.string().min(1, { message: "Required" }),
    description: z.string().optional(),
});

export interface IUpdateTodoListForm {
    open: boolean;
    setClose: () => void;
    title: string;
    description: string;
    id: string;
}
export const UpdateTodoListForm = (props: IUpdateTodoListForm) => {
    const { updateTodo } = useTodo();
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<z.infer<typeof updateFormSchema>>({
        resolver: zodResolver(updateFormSchema),
        defaultValues: {
            title: props.title ?? "",
            description: props.description ?? "",
        },
    });
    const onHandleSubmit = (value: z.infer<typeof updateFormSchema>) => {
        updateTodo({
            id: props.id,
            title: value.title,
            description: value.description || "",
        });
        reset();
    };
    return (
        <>
            <Dialog open={props.open} onClose={props.setClose}>
                <DialogTitle>Update todo item</DialogTitle>
                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <DialogContent>
                        <DialogContent>
                            fill in the below form and click submit to update
                            the item in todo list
                        </DialogContent>
                        <div className="flex flex-col gap-4 p-3">
                            <Controller
                                control={control}
                                name={"title"}
                                render={({ field: { value, onChange } }) => (
                                    <TextField
                                        value={value}
                                        label="title"
                                        onChange={(e) =>
                                            onChange(e.target.value)
                                        }
                                        helperText={errors.title?.message}
                                    ></TextField>
                                )}
                            ></Controller>
                            <Controller
                                control={control}
                                name={"description"}
                                render={({ field: { value, onChange } }) => (
                                    <TextField
                                        value={value}
                                        label="description"
                                        onChange={(e) =>
                                            onChange(e.target.value)
                                        }
                                        helperText={errors.description?.message}
                                    ></TextField>
                                )}
                            ></Controller>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                        >
                            submit
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            type="button"
                            onClick={() => {
                                reset();
                                props.setClose();
                            }}
                        >
                            {" "}
                            cancel
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};
