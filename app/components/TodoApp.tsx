import React from "react";
import TodoItem from "~/components/TodoItem";

type TodoAppProps = {
  todos: TodoType[];
};

const TodoApp = ({ todos }: TodoAppProps) => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Marie's todo list
        </h1>

        <ul className="space-y-4">
          {todos.map((item) => (
            <TodoItem
              id={item.id}
              todo={item.todo}
              completed={item.completed}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
