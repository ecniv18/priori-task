import { useState } from "react";

export default function TaskForm({ closeForm, createTask }) {
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
    <form className='form'>
      <span className='form-title_counter'>{title.length}</span>
      <input
        onChange={(e) => titleOnChange(e)}
        className='form-title_input'
        type='text'
        value={title.value}
        maxLength={17}
      />
      <span className='form-desc_counter'>{description.length}</span>
      <textarea
        onChange={(e) => descOnChange(e)}
        className='form-description'
        value={description.value}
        maxLength={100}
      ></textarea>
      <div className='form-other_input'>
        <input
          onChange={(e) => dueDateOnChange(e)}
          className='form-date_input'
          type='date'
          value={dueDate.value}
        />
        <select
          onChange={(e) => priorityOnChange(e)}
          className='form-priority_input'
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
          createTask({
            title: title.value,
            description: description.value,
            dueDate: dueDate.value,
            priority: priority.value,
          });
        }}
        className='form-create_task_button'
      >
        Create Task
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          closeForm();
        }}
        className='form-close_task_button'
      >
        Close
      </button>
    </form>
  );
}
