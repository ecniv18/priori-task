import { useState } from "react";
import { validateProjectInput } from "../../modules/validation";

export default function ProjectForm({ closeFormFunc, createProject }) {
  const [nameInput, setNameInputValue] = useState({
    value: "",
    length: 0,
  });

  function submitButtonCallBack() {
    if (!validateProjectInput(nameInput.value)) return;
    createProject(nameInput.value);
    setNameInputValue({ value: "", length: 0 });
    closeFormFunc();
  }

  return (
    <form className='project_form form box'>
      <span className='project_form-counter counter'>
        {nameInput.length} / 15
      </span>
      <input
        onChange={(e) => {
          setNameInputValue({
            value: e.target.value,
            length: e.target.value.length,
          });
        }}
        className='project_form-name'
        type='text'
        value={nameInput.value}
        maxLength={15}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          submitButtonCallBack();
        }}
        className='project_form-submit'
      >
        Create
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          closeFormFunc();
        }}
        className='project_form-close'
      >
        Close
      </button>
    </form>
  );
}
