import TaskComp from "./Task-comp";
import TaskForm from "./Task-form";

export default function Tab({
  heading,
  className,
  children,
  creationMode,
  taskList,
  createTask,
  deleteTask,
  mouseDownDrag,
  closeForm,
}) {
  function noTaskMsg() {
    if (heading === "Tasks") {
      return <p>No Tasks yet..</p>;
    } else if (heading === "Working") {
      return <p>You're Not Currently Working..</p>;
    } else if (heading === "Finished") {
      return <p>No Finished Tasks</p>;
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
          <TaskForm createTask={createTask} closeForm={closeForm} />
        )}
        {taskList.length === 0 && noTaskMsg()}
        {taskList.length > 0 &&
          taskList.map((t) => {
            if (heading.toLowerCase() === t.tab) {
              return (
                <li key={t.id}>
                  <TaskComp
                    description={t.description}
                    deleteTask={() => deleteTask(t.id)}
                    mouseDownDrag={mouseDownDrag} // TODO: make the taks draggable / write the code for mouseDownDrag
                  />
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
}
