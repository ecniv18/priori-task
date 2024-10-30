import ButtonComp from "../Button-comp";
import deleteIconSvg from "../../asset/icons/delete_icon.svg";

export default function TaskComp({ task, deleteTask, moveTaskTo }) {
  function nextTab() {
    const prefix = "Move to";
    if (task.tab === "tasks") {
      return prefix + " Working tab";
    } else if (task.tab === "working") {
      return prefix + " Finished tab";
    } else {
      return "Delete Task";
    }
  }

  return (
    <article className='task'>
      <div>
        <p className='task-description'>{task.description}</p>
        <ButtonComp className='task-delete-button' onClick={deleteTask}>
          <img src={deleteIconSvg} alt='delete icon' />
        </ButtonComp>
      </div>
      {task.tab !== "finished" ? (
        <ButtonComp onClick={moveTaskTo} className='task-drag_bar'>
          {nextTab()}
        </ButtonComp>
      ) : (
        <ButtonComp onClick={deleteTask} className='task-drag_bar'>
          {nextTab()}
        </ButtonComp>
      )}
    </article>
  );
}
