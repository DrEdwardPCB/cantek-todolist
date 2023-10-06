import { Droppable } from "react-beautiful-dnd";
import { EStage, ITodo } from "./todoList";
import { TodoListItem } from "./todoListItem";
import { useGlobalFilter } from "../hooks/useGlobalFilter";

export interface ITodoListColumnProps {
    columnId: string;
    name: EStage;
    items: ITodo[];
}
export const TodoListColumn = ({
    columnId,
    name,
    items,
}: ITodoListColumnProps) => {
    const { filter } = useGlobalFilter();
    return (
        <div className="flex flex-col items-center" key={columnId}>
            <h2>{name}</h2>
            <div className="p-2 m-1">
                <Droppable droppableId={columnId} key={`${columnId}-droppable`}>
                    {(provided, snapshot) => {
                        return (
                            <div
                                key={`${columnId}-droppablediv`}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={`w-[250px] h-[500px] p-2 rounded shadow-xl overflow-y-auto ${
                                    snapshot.isDraggingOver
                                        ? "bg-slate-600"
                                        : "bg-gray-600"
                                }`}
                            >
                                {items
                                    .filter((e) => e.title.includes(filter))
                                    .map((item, index) => {
                                        return (
                                            <TodoListItem
                                                key={item.id}
                                                item={item}
                                                index={index}
                                            ></TodoListItem>
                                        );
                                    })}
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
            </div>
        </div>
    );
};
