import "./css/_root.css";
import Main from "./components/main";
import SideBar from "./components/sidebar";
import LIBRARY from "./global/LIBRARY";
import { useState } from "react";

function App() {
  const [projectList, setProjectList] = useState(LIBRARY.getProjects());
  const [taskList, setTaskList] = useState(LIBRARY.getActiveProjectTasks());

  function updateProjectList() {
    setProjectList(LIBRARY.getProjects());
  }

  function updateTaskList() {
    setTaskList(LIBRARY.getActiveProjectTasks());
  }

  function createProject(name) {
    LIBRARY.createProject(name);
    updateProjectList();
  }

  function deleteProject(id) {
    LIBRARY.deleteProject(id);
    updateProjectList();
    updateTaskList();
  }

  function activateProject(id) {
    LIBRARY.activateProject(id);
    updateProjectList();
    updateTaskList();
  }

  function createTask(description) {
    LIBRARY.createTask(description);
    updateTaskList();
  }

  function deleteTask(id) {
    LIBRARY.deleteTask(id);
    updateTaskList();
  }

  function moveTaskTo(id) {
    LIBRARY.moveTaskTo(id);
    updateTaskList();
  }

  return (
    <div className='wrapper'>
      <SideBar
        projectList={projectList}
        createProject={createProject}
        deleteProject={deleteProject}
        activateProject={activateProject}
      />
      <Main
        taskList={taskList}
        createTask={createTask}
        deleteTask={deleteTask}
        moveTaskTo={moveTaskTo}
      />
    </div>
  );
}

export default App;
