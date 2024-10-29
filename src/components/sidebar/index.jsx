import { useState } from "react";
import ButtonComp from "../Button-comp";
import ProjectComp from "./Project-comp";
import ProjectForm from "./Project-form";

export default function SideBar({ projectList, createProject, deleteProject }) {
  const [creationMode, setCreationMode] = useState(false);

  return (
    <nav className='sidebar'>
      <ButtonComp
        onClick={() => setCreationMode(!creationMode)}
        className={"create-propject-btn btn"}
      >
        <img src='src/asset/icons/add_icon.svg' alt='Add Project' />
      </ButtonComp>

      <ul className='sidebar_project-list'>
        {creationMode && (
          <li>
            <ProjectForm
              createProject={(name) => {
                createProject(name);
                setCreationMode(false);
              }}
            />
          </li>
        )}
        {projectList.map((p) => {
          return (
            <li key={p.id}>
              <ProjectComp
                projectName={p.name}
                id={p.id}
                deleteProject={() => deleteProject(p.id)}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
