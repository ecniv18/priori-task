import { useState } from "react";
import "../../css/project.css";
import ButtonComp from "../Button-comp";
import ProjectMenu from "./Project-menu";

export default function ProjectComp({
  projectName,
  id,
  selectProject,
  deleteProject,
  editProject,
}) {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className='project'>
      {menuOpened && (
        <ProjectMenu editProject={editProject} deleteProject={deleteProject} />
      )}
      <h2 onClick={() => selectProject(id)} className='project-name'>
        {projectName}
      </h2>
      <ButtonComp
        onClick={() => setMenuOpened(!menuOpened)}
        className='project-option-button'
      >
        <img src='src/asset/icons/menu_icon.svg' alt='menu icon' />
      </ButtonComp>
    </div>
  );
}
