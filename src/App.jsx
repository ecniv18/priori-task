import "./css/_root.css";
import Main from "./components/main";
import SideBar from "./components/sidebar";
import LIBRARY from "./global/LIBRARY";
import { useState } from "react";

function App() {
  const [projectList, setProjectList] = useState(LIBRARY.getProjects());

  function updateProjectList() {
    setProjectList(LIBRARY.getProjects());
  }

  function createProject(name) {
    LIBRARY.createProject(name);
    updateProjectList();
  }

  function deleteProject(id) {
    LIBRARY.deleteProject(id);
    updateProjectList();
  }

  return (
    <div className='wrapper'>
      <SideBar
        projectList={projectList}
        createProject={createProject}
        deleteProject={deleteProject}
      />
      <Main />
    </div>
  );
}

export default App;
