import ButtonComp from "../Button-comp";
import { useState } from "react";

export default function ProjectForm({ createProject }) {
  const [nameValue, setNameValue] = useState("");

  // Add Validation
  return (
    <div className='project-form'>
      <input
        className='project-form-name'
        type='text'
        onChange={(e) => setNameValue(e.target.value)}
        value={nameValue}
        maxLength={16}
      />
      <ButtonComp
        onClick={(e) => {
          e.preventDefault();
          createProject(nameValue);
        }}
        className='project-form-button'
      >
        <img src='src/asset/icons/add_icon.svg' alt='create icon' />
      </ButtonComp>
    </div>
  );
}
