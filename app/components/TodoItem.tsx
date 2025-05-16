import React from "react";
import { updateTodo } from "~/service/todoListService";
import { clsx } from "clsx";

const TodoItem = ({ id, todo, completed }: Omit<TodoType, "userId">) => {
  const [isCompleted, setIsCompleted] = React.useState(completed);

  return (
    <li className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
      <label className="flex items-center space-x-3">
        <input
          checked={isCompleted}
          type="checkbox"
          className="form-checkbox h-5 w-5 text-indigo-600 rounded"
          onChange={async () => {
            setIsCompleted(!isCompleted);
            await updateTodo(id);
          }}
        />
        <span
          className={clsx({
            "text-gray-700": !isCompleted,
            "line-through italic text-gray-400": isCompleted,
          })}
        >
          {todo}
        </span>
      </label>
    </li>
  );
};

export default TodoItem;
