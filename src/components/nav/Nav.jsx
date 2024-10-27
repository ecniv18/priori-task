import "./style.css";
import { useState } from "react";
import LIBRARY from "../../modules/library";
import Project from "./Project";
import ProjectForm from "./Project-form";

export default function Nav({
  projectList,
  createProject,
  setActiveProject,
  deleteProject,
}) {
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);

  function openProjectForm() {
    setIsProjectFormOpen(true);
  }

  function closeProjectForm() {
    setIsProjectFormOpen(false);
  }

  return (
    <nav className='nav'>
      {isProjectFormOpen && (
        <ProjectForm
          closeFormFunc={closeProjectForm}
          createProject={createProject}
        />
      )}
      <button onClick={openProjectForm} className='nav-create_project_button'>
        New Project
      </button>
      <ul className='project_list'>
        {projectList.map((proj) => (
          <Project
            key={proj.id}
            {...proj}
            deleteProject={deleteProject}
            setActiveProject={() => {
              setActiveProject(proj.id);
            }}
          />
        ))}
      </ul>
    </nav>
  );
}
