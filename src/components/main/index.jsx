import "../../css/main/main.css";
import ButtonComp from "../Button-comp";
import Tab from "./Tab";
import { useState } from "react";
import addIconSvg from "../../asset/icons/add_icon.svg";

export default function Main({ taskList, createTask, deleteTask, moveTaskTo }) {
  const [creationMode, setCreationMode] = useState(false);

  return (
    <main className='main'>
      <Tab
        heading='Tasks'
        className='tasks'
        taskList={taskList}
        creationMode={creationMode}
        closeForm={() => setCreationMode(false)}
        createTask={createTask}
        deleteTask={deleteTask}
        moveTaskTo={moveTaskTo}
      >
        <ButtonComp
          onClick={() => setCreationMode(!creationMode)}
          className='tasks_add-button'
        >
          <img src={addIconSvg} alt='add task icon' />
        </ButtonComp>
      </Tab>
      <Tab
        heading='Working'
        className='working'
        taskList={taskList}
        createTask={createTask}
        deleteTask={deleteTask}
        moveTaskTo={moveTaskTo}
      />
      <Tab
        heading='Finished'
        className='finished'
        taskList={taskList}
        createTask={createTask}
        deleteTask={deleteTask}
        moveTaskTo={moveTaskTo}
      />
    </main>
  );
}
