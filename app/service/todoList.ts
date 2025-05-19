function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// TODO How would you type this function with TypeScript
export const getTodos = async () => {
  await delay(200);

  // TODO fetch list of todos
  // GET https://dummyjson.com/todos

  return [];
};

export const updateTodo = async (id: number): Promise<TodoType> => {
  const options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      completed: false,
    }),
  };

  const response = await fetch(`https://dummyjson.com/todos/${id}`, options);

  const updatedTodo = await response.json();

  return updatedTodo;
};
