import { AddTodoListForm } from "../components/addTodoListForm";
import ColumnShowControl from "../components/columnShowControl";
import { FilterTodoListForm } from "../components/filterTodoListForm";
import { TodoListBoard } from "../components/todoListBoard";
import { useTodo } from "../hooks/useTodo";

const TodolistPage = () => {
    const { todo, setTodo } = useTodo();
    return (
        <div className="min-w-[480px] bg-slate-700 p-10 text-white">
            <h1 className="text-2xl font-bold">Edward's todo list</h1>
            <div className="flex justify-between items-center flex-wrap gap-4">
                <div className="flex flex-wrap gap-4">
                    <AddTodoListForm />
                    <ColumnShowControl />
                </div>
                <FilterTodoListForm />
            </div>
            <TodoListBoard column={todo} setColumn={setTodo}></TodoListBoard>
        </div>
    );
};
export default TodolistPage;
