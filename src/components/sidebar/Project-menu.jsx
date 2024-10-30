import ButtonComp from "../Button-comp";
import backIconSvg from "../../asset/icons/back_icon.svg";

export default function ProjectMenu({ deleteProject, editProject, closeMenu }) {
  return (
    <div className='project-menu'>
      <ButtonComp onClick={closeMenu} className='project-menu-button'>
        <img src={backIconSvg} alt='back arrow icon' />
      </ButtonComp>
      <ButtonComp className='project-menu-button'>edit</ButtonComp>
      <ButtonComp onClick={deleteProject} className='project-menu-button'>
        delete
      </ButtonComp>
    </div>
  );
}
