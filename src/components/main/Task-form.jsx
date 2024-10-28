import { useState } from "react";

export default function TaskForm({
  closeForm,
  createTask,
  editTask,
  mode,
  taskId,
}) {
  const currentDate = new Date().toISOString().slice(0, 10);
  const [title, setTitle] = useState({ value: "", length: 0 });
  const [description, setDescription] = useState({ value: "", length: 0 });
  const [dueDate, setDueDate] = useState({ value: currentDate });
  const [priority, setPriority] = useState({ value: "normal" });

  function titleOnChange(e) {
    setTitle({ value: e.target.value, length: e.target.value.length });
  }

  function descOnChange(e) {
    setDescription({ value: e.target.value, length: e.target.value.length });
  }

  function dueDateOnChange(e) {
    setDueDate({ value: e.target.value });
  }

  function priorityOnChange(e) {
    setPriority({ value: e.target.value });
  }
  return (
    <form className='task_form form box'>
      <span className='task_form-title_counter counter'>
        {title.length} / 20
      </span>
      <input
        onChange={(e) => titleOnChange(e)}
        className='task_form-title_input'
        type='text'
        value={title.value}
        maxLength={20}
      />
      <span className='task_form-desc_counter counter'>
        {description.length} / 150
      </span>
      <textarea
        onChange={(e) => descOnChange(e)}
        className='task_form-description'
        value={description.value}
        maxLength={250}
      ></textarea>
      <div className='task_form-other_input'>
        <input
          onChange={(e) => dueDateOnChange(e)}
          className='task_form-date_input'
          type='date'
          value={dueDate.value}
        />
        <select
          onChange={(e) => priorityOnChange(e)}
          className='task_form-priority_input'
          value={priority.value}
        >
          <option value='high'>High</option>
          <option value='normal'>Normal</option>
          <option value='low'>Low</option>
        </select>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (mode === "create") {
            createTask({
              title: title.value,
              description: description.value,
              dueDate: dueDate.value,
              priority: priority.value,
            });
          } else if (mode === "edit") {
            editTask(taskId, {
              title: title.value,
              description: description.value,
              dueDate: dueDate.value,
              priority: priority.value,
            });
          }

          closeForm();
        }}
        className='task_form-create_task_button'
      >
        {mode === "create" ? "Create Task" : "Edit Task"}
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          closeForm();
        }}
        className='task_form-close_task_button'
      >
        Close
      </button>
    </form>
  );
}
