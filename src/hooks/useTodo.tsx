import { useLocalStorage } from "usehooks-ts";
import { EStage, ITodo } from "../components/todoList";
import { cloneDeep, isNil } from "lodash";
import { useMemo } from "react";

// this hooks is acting as an reducer uses usehook uselocalstorage as a source of truth, allowing singleton store like hooks
export const useTodo = () => {
    const defaultTodo: Record<
        string,
        { name: EStage; items: ITodo[]; hidden: boolean }
    > = {
        [EStage.TODO]: {
            name: EStage.TODO,
            items: [],
            hidden: false,
        },
        [EStage.INVESTIGATING]: {
            name: EStage.INVESTIGATING,
            items: [],
            hidden: false,
        },
        [EStage.INPROGRESS]: {
            name: EStage.INPROGRESS,
            items: [],
            hidden: false,
        },
        [EStage.QA]: {
            name: EStage.QA,
            items: [],
            hidden: false,
        },
        [EStage.DONE]: {
            name: EStage.DONE,
            items: [],
            hidden: false,
        },
        [EStage.CANCEL]: {
            name: EStage.CANCEL,
            items: [],
            hidden: false,
        },
    };
    const [todo, setTodo] = useLocalStorage<
        Record<string, { name: EStage; items: ITodo[]; hidden: boolean }>
    >("todolist", cloneDeep(defaultTodo));

    const addTodo = (newTodo: ITodo) => {
        setTodo({
            ...todo,
            [EStage.TODO]: {
                ...todo[EStage.TODO],
                items: [...todo[EStage.TODO].items, newTodo],
            },
        });
    };
    const moveTo = (id: string, target: EStage) => {
        //1. find the id of todo
        //2. remove from current
        //3. set to target
        let src: string = "";
        let item: ITodo;
        for (const [key, val] of Object.entries(todo)) {
            const targetItem = val.items.find((e) => e.id === id);

            if (!isNil(targetItem)) {
                src = key;
                item = targetItem;
                if (src === target) {
                    break;
                }
                setTodo({
                    ...todo,
                    [src]: {
                        ...todo[src],
                        items: [
                            ...todo[src].items.filter((e) => e.id !== item?.id),
                        ],
                    },
                    [target]: {
                        ...todo[target],
                        items: [...todo[target].items, item],
                    },
                });
                break;
            }
        }
    };
    const removeTodo = (id: string) => {
        for (const [key, val] of Object.entries(todo)) {
            const targetItem = val.items.find((e) => e.id === id);
            if (!isNil(targetItem)) {
                setTodo({
                    ...todo,
                    [key]: {
                        ...todo[key],
                        items: [
                            ...todo[key].items.filter(
                                (e) => e.id !== targetItem?.id
                            ),
                        ],
                    },
                });
                break;
            }
        }
    };
    const toggleColumnVisibility = (key: string) => {
        for (const colKey of Object.keys(todo)) {
            if (colKey === key) {
                setTodo({
                    ...todo,
                    [key]: {
                        ...todo[key],
                        hidden: !todo[colKey].hidden,
                    },
                });
                break;
            }
        }
    };
    const isEmpty = useMemo(() => {
        for (const v of Object.values(todo)) {
            if (v.items.length > 0) {
                return false;
            }
        }
        return true;
    }, [todo]);

    const updateTodo = (newTodoItem: Partial<ITodo> & { id: string }) => {
        for (const [key, val] of Object.entries(todo)) {
            const targetItem = val.items.find((e) => e.id === newTodoItem.id);
            if (!isNil(targetItem)) {
                setTodo({
                    ...todo,
                    [key]: {
                        ...todo[key],
                        items: [
                            ...todo[key].items.map((e) => {
                                if (e.id === targetItem.id) {
                                    return Object.assign(
                                        targetItem,
                                        newTodoItem
                                    );
                                }
                                return e;
                            }),
                        ],
                    },
                });
                break;
            }
        }
    };
    const reset = () => {
        setTodo(cloneDeep(defaultTodo));
    };
    return {
        todo,
        isEmpty,
        setTodo,
        addTodo,
        moveTo,
        removeTodo,
        updateTodo,
        toggleColumnVisibility,
        reset,
    };
};
