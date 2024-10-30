import "../../css/sidebar/sidebar.css";
import "../../css/sidebar/project.css";
import { useState } from "react";
import ButtonComp from "../Button-comp";
import ProjectComp from "./Project-comp";
import Form from "../Form";

export default function SideBar({
  projectList,
  createProject,
  deleteProject,
  activateProject,
}) {
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
            <Form
              submitFunc={createProject}
              closeFormFunc={() => setCreationMode(false)}
            />
          </li>
        )}
        {projectList.map((p) => {
          return (
            <li key={p.id}>
              <ProjectComp
                name={p.name}
                activeStatus={p.active}
                activateProject={() => activateProject(p.id)}
                deleteProject={() => deleteProject(p.id)}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
