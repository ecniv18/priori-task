import "../css/form.css";
import LIBRARY from "../global/LIBRARY";
import ButtonComp from "./Button-comp";
import { useState } from "react";
import addIconSvg from "../asset/icons/add_icon.svg";

export default function Form({
  type, // 'project', 'task'
  mode = "read", // 'modify' // impletment modification of project or task
  submitFunc,
  closeFormFunc,
}) {
  const [value, setValue] = useState("");

  function handleCallBack() {
    if (type === "task") {
      if (!LIBRARY.getActiveProject()) return;
    }
    if (value.length <= 0) return;
    submitFunc(value);
    closeFormFunc();
  }

  // Add Validation
  return (
    <div className='form'>
      <input
        autoFocus
        className='form-input'
        type='text'
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleCallBack();
          }
        }}
        value={value}
        maxLength={type === "project" ? 16 : 200}
      />
      <ButtonComp
        onClick={(e) => {
          e.preventDefault();
          handleCallBack();
        }}
        className='form-submit_button'
      >
        <img src={addIconSvg} alt='create icon' />
      </ButtonComp>
    </div>
  );
}
