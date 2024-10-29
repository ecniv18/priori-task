import LIBRARY from "../../global/LIBRARY";
import ButtonComp from "../Button-comp";
import { useState } from "react";

export default function TaskForm({ createTask, closeForm }) {
  const [descValue, setDescValue] = useState("");

  // Add Validation
  return (
    <div className='project-form'>
      <input
        className='project-form-name'
        type='text'
        onChange={(e) => setDescValue(e.target.value)}
        value={descValue}
        maxLength={30}
      />
      <ButtonComp
        onClick={(e) => {
          e.preventDefault();
          if (LIBRARY.getActiveProject() === undefined) return;
          createTask(descValue);
          closeForm();
        }}
        className='project-form-button'
      >
        <img src='src/asset/icons/add_icon.svg' alt='create icon' />
      </ButtonComp>
    </div>
  );
}
