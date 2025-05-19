import React from "react";
import { clsx } from "clsx";

// TODO In TypeScript, how would you reuse TodoType, not tell it to exclude userId
const TodoItem = ({ id, todo, completed }: any) => {
  // TODO update todo idem, and sticke through if completed
  // if isCompleted apply "line-through italic text-gray-400"
  // if !isCompleted apply "text-gray-700"

  return (
    <li className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
      <label className="flex items-center space-x-3">
        <input
          checked={false}
          type="checkbox"
          className="form-checkbox h-5 w-5 text-indigo-600 rounded"
          onChange={async () => {}}
        />
        <span>{todo}</span>
      </label>
    </li>
  );
};

export default TodoItem;
