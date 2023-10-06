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
import { v4 } from "uuid";
import { useState } from "react";
const addFormSchema = z.object({
    title: z.string().min(1, { message: "Required" }),
    description: z.string().optional(),
});
export const AddTodoListForm = () => {
    const [open, setOpen] = useState(false);
    const { addTodo } = useTodo();
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<z.infer<typeof addFormSchema>>({
        resolver: zodResolver(addFormSchema),
        defaultValues: {
            title: "",
            description: "",
        },
    });
    const onHandleSubmit = (value: z.infer<typeof addFormSchema>) => {
        addTodo({
            id: v4(),
            title: value.title,
            description: value.description || "",
            createdAt: new Date().toISOString(),
        });
        reset();
    };
    return (
        <>
            <Button variant="contained" onClick={() => setOpen(true)}>
                {" "}
                add{" "}
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Add Item to TODO</DialogTitle>
                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <DialogContent>
                        <DialogContent>
                            fill in the below form and click submit to add item
                            into todo list
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
                                setOpen(false);
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
