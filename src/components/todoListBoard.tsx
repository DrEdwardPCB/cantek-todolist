import { ITodo, EStage } from "./todoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { TodoListColumn } from "./todoListColumn";
import { useTodo } from "../hooks/useTodo";

export interface ITodoListBoardProps {
    column: Record<string, { name: EStage; items: ITodo[]; hidden: boolean }>;
    setColumn: (
        board: Record<string, { name: EStage; items: ITodo[]; hidden: boolean }>
    ) => void;
}
export const TodoListBoard = (props: ITodoListBoardProps) => {
    const { isEmpty } = useTodo();
    const onDragEnd = (
        result: DropResult,
        columns: Record<
            string,
            { name: EStage; items: ITodo[]; hidden: boolean }
        >,
        setColumns: (
            board: Record<
                string,
                { name: EStage; items: ITodo[]; hidden: boolean }
            >
        ) => void
    ) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems,
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems,
                },
            });
        } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems,
                },
            });
        }
    };
    return (
        <DragDropContext
            onDragEnd={(result) =>
                onDragEnd(result, props.column, props.setColumn)
            }
        >
            <div className="relative">
                <div className=" min-h-96 min-w-96 margin-auto w-full flex gap-4 overflow-scroll">
                    {Object.entries(props.column)
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        .filter((e) => !e[1].hidden)
                        .map(([columnId, column]) => {
                            return (
                                <TodoListColumn
                                    key={`${columnId}-TodoListColumn`}
                                    columnId={columnId}
                                    items={column.items}
                                    name={column.name}
                                />
                            );
                        })}
                </div>
                {isEmpty ? (
                    <div className="absolute w-full h-full top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                        <h1 className="rotate-12 text-3xl break-all text-slate-100">
                            no item in todo list
                        </h1>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </DragDropContext>
    );
};
