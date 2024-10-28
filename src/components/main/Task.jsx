import { useState } from "react";
import TaskForm from "./Task-form";

export default function Task({
  title,
  dueDate,
  id,
  description,
  priority,
  completed,
  deleteTask,
  editTask,
  completeTask,
}) {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  function openEditForm() {
    setIsEditFormOpen(true);
  }

  function closeEditForm() {
    setIsEditFormOpen(false);
  }

  return (
    <article id={id} className={"task box " + priority + "_priority"}>
      {isEditFormOpen && (
        <TaskForm
          mode='edit'
          taskId={id}
          closeForm={closeEditForm}
          editTask={editTask}
        />
      )}
      <div className='task_info'>
        <h2 className='task_info-title'>
          {title.length === 0 ? "Untitled" : title}
        </h2>
        <p className='task_info-description'>
          {description.length === 0 ? "No Task Description" : description}
        </p>
        <span className='task_info-priority'>{priority}</span>
        <p className='task_info-due_date'>{dueDate}</p>
      </div>
      <div className='task_controls'>
        <button
          onClick={() => completeTask(id)}
          className='task_controls-complete_button'
        >
          {completed ? "Completed" : "Incomplete"}
        </button>
        <button onClick={openEditForm} className='task_controls-edit_button'>
          Edit
        </button>
        <button
          onClick={() => deleteTask(id)}
          className='task_controls-delete_button'
        >
          Delete
        </button>
      </div>
    </article>
  );
}
