import ButtonComp from "../Button-comp";

export default function ProjectMenu({ deleteProject, editProject, closeMenu }) {
  return (
    <div className='project-menu'>
      <ButtonComp onClick={closeMenu} className='project-menu-button'>
        <img src='src/asset/icons/back_icon.svg' alt='back arrow icon' />
      </ButtonComp>
      <ButtonComp className='project-menu-button'>edit</ButtonComp>
      <ButtonComp onClick={deleteProject} className='project-menu-button'>
        delete
      </ButtonComp>
    </div>
  );
}
