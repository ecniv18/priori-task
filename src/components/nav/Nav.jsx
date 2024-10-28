import "./style.css";
import { useState } from "react";

import Project from "./Project";
import ProjectForm from "./Project-form";

export default function Nav({
  projectList,
  createProject,
  setActiveProject,
  deleteProject,
}) {
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);
  const [isNavOpen, setIsOpenNav] = useState(false);

  function openProjectForm() {
    setIsProjectFormOpen(true);
  }

  function closeProjectForm() {
    setIsProjectFormOpen(false);
  }

  function openNav() {
    if (isNavOpen) {
      setIsOpenNav(false);
    } else {
      setIsOpenNav(true);
    }
  }

  return (
    <>
      <button onClick={openNav} className='hamburger'>
        Projects
      </button>
      <nav className='nav box' style={{ display: isNavOpen ? "flex" : "none" }}>
        {isProjectFormOpen && (
          <ProjectForm
            closeFormFunc={closeProjectForm}
            createProject={createProject}
          />
        )}

        <button onClick={openProjectForm} className='nav-create_project_button'>
          New Project
        </button>
        <ul className='nav-project_list'>
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
    </>
  );
}
