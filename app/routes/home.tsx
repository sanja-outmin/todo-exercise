import TodoApp from "../components/TodoApp";
import { getTodos } from "~/service/todoListService";

export async function clientLoader() {
  const todoResponse = await getTodos();
  return {
    todoResponse,
  };
}

type HomeProps = {
  loaderData: {
    todoResponse: TodosResponseType;
  };
};
export default function Home({ loaderData }: HomeProps) {
  const { todoResponse } = loaderData;

  return (
    <>
      <TodoApp todos={todoResponse?.todos} />
    </>
  );
}
