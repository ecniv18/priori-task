import { useState } from "react";
import TaskForm from "./Task-form";

export default function Task({
  title,
  dueDate,
  id,
  description,
  priority,
  deleteTask,
  editTask,
}) {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  function openEditForm() {
    setIsEditFormOpen(true);
  }

  function closeEditForm() {
    setIsEditFormOpen(false);
  }

  return (
    <article id={id} className='task box'>
      {isEditFormOpen && (
        <TaskForm
          mode='edit'
          taskId={id}
          closeForm={closeEditForm}
          editTask={editTask}
        />
      )}
      <div className='task_info'>
        <h2 className='task_info-title'>{title}</h2>
        <p className='task_info-description'>{description}</p>
        <span className='task_info-priority'>{priority}</span>
        <p className='task_info-due_date'>{dueDate}</p>
      </div>
      <div className='task_controls'>
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
