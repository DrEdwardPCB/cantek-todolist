import { Draggable } from "react-beautiful-dnd";
import { ITodo } from "./todoList";
import { TodoListItemMenu } from "./todoListItemMenu";
export interface ITodoListItemProps {
    item: ITodo;
    index: number;
}
export const TodoListItem = ({ item, index }: ITodoListItemProps) => {
    return (
        <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided, snapshot) => {
                return (
                    <div
                        key={item.id}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            ...provided.draggableProps.style,
                        }}
                        className={`pointer-none p-4 min-h-[50px] text-white rounded mt-2 shadow-lg ${
                            snapshot.isDragging
                                ? "bg-slate-700"
                                : "bg-slate-800"
                        }`}
                    >
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold text-lg">
                                    {item.title}
                                </h3>
                                <TodoListItemMenu
                                    id={item.id}
                                    title={item.title}
                                    description={item.description}
                                ></TodoListItemMenu>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="break-all">{item.description}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-xs text-slate-300">
                                    {item.createdAt}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            }}
        </Draggable>
    );
};
