type TodoType = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

type TodosResponseType = {
  todos: TodoType[];
  total: number;
  skip: number;
  limit: number;
};
