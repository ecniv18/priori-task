import Form from "../Form";
import TaskComp from "./Task-comp";

export default function Tab({
  heading,
  className,
  children,
  creationMode,
  taskList,
  createTask,
  deleteTask,
  moveTaskTo,
  closeForm,
}) {
  function NoTaskMsg() {
    if (heading === "Tasks") {
      return <p>No Tasks yet..</p>;
    }
  }

  return (
    <div className={className}>
      <header className={className + "_header"}>
        <h2 className={className + "_header-heading"}>{heading}</h2>
        {children}
      </header>
      <ul className='task-list'>
        {creationMode && (
          <Form type='task' submitFunc={createTask} closeFormFunc={closeForm} />
        )}
        {taskList.length === 0 && <NoTaskMsg />}
        {taskList.length > 0 &&
          taskList.map((t) => {
            if (heading.toLowerCase() === t.tab) {
              return (
                <li key={t.id}>
                  <TaskComp
                    task={t}
                    deleteTask={() => deleteTask(t.id)}
                    moveTaskTo={() => {
                      console.log(t.id);
                      moveTaskTo(t.id);
                    }}
                  />
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
}
