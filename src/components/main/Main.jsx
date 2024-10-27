import Todo from "./Todo";
import LIBRARY from "../../modules/library";

export default function Main({ children }) {
  const todos = LIBRARY.getTodos(LIBRARY.getActiveProject().id);

  return (
    <main className='main'>
      {children}
      <section className='todo_list'>{displayTodos(todos)}</section>
    </main>
  );
}

function displayTodos(todos) {
  return (
    <>
      {todos.length > 0
        ? todos.forEach((todo) => <Todo {...todo} />)
        : "Empty Todos"}
    </>
  );
}
