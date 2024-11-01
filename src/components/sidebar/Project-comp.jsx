import { useState } from "react";
import ButtonComp from "../Button-comp";
import ProjectMenu from "./Project-menu";
import menuIconSvg from "../../asset/icons/menu_icon.svg";

export default function ProjectComp({
  name,
  activeStatus,
  activateProject,
  deleteProject,
  editProject,
}) {
  const [menuOpened, setMenuOpened] = useState(false);
  const [draggingStatus, setDraggingStatus] = useState(false);

  return (
    <div id={activeStatus === true ? "active" : ""} className='project'>
      {menuOpened && (
        <ProjectMenu
          editProject={editProject}
          deleteProject={deleteProject}
          closeMenu={() => setMenuOpened(false)}
        />
      )}
      <h2 onClick={activateProject} className='project-name'>
        {name}
      </h2>
      <ButtonComp
        onClick={() => setMenuOpened(!menuOpened)}
        className='project-option-button'
      >
        <img src={menuIconSvg} alt='menu icon' />
      </ButtonComp>
    </div>
  );
}
