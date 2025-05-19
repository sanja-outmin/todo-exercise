function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getTodos = async (): Promise<TodosResponseType> => {
  await delay(200);

  const options = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  };

  const response = await fetch("https://dummyjson.com/todos", options);
  const mockTodos = await response.json();

  return mockTodos;
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
