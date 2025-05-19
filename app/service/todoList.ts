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

export const updateTodo = async (id: number) => {
  // UPDATE a todo
  // PUT https://dummyjson.com/todos/${id}

  return {};
};
