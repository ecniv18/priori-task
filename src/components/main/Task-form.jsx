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
      <label htmlFor='title_input' className='title_label label'>
        Title
      </label>
      <input
        id='title_input'
        onChange={(e) => titleOnChange(e)}
        className='task_form-title_input'
        type='text'
        value={title.value}
        maxLength={20}
      />
      <span className='task_form-desc_counter counter'>
        {description.length} / 150
      </span>
      <label htmlFor='description_textarea' className='description_label label'>
        Description
      </label>
      <textarea
        id='description_textarea'
        onChange={(e) => descOnChange(e)}
        className='task_form-description'
        value={description.value}
        maxLength={150}
      ></textarea>

      <div className='task_form-other_input'>
        <label htmlFor='due_date_date' className='due_date_label label'>
          Due Date
        </label>
        <input
          id='due_date_date'
          onChange={(e) => dueDateOnChange(e)}
          className='task_form-date_input'
          type='date'
          value={dueDate.value}
        />
        <label htmlFor='priority_select' className='priority_label label'>
          Priority
        </label>
        <select
          id='priority_select'
          onChange={(e) => priorityOnChange(e)}
          className={"task_form-priority_input " + priority.value + "_priority"}
          value={priority.value}
        >
          <option className='high_priority' value='high'>
            High
          </option>
          <option className='normal_priority' value='normal'>
            Normal
          </option>
          <option className='low_priority' value='low'>
            Low
          </option>
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
