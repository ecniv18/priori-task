import ButtonComp from "../Button-comp";

export default function TaskComp({ description, deleteTask, mouseDownDrag }) {
  return (
    <article className='task'>
      <div>
        <p className='task-description'>{description}</p>
        <ButtonComp className='task-delete-button' onClick={deleteTask}>
          <img src='src/asset/icons/delete_icon.svg' alt='delete icon' />
        </ButtonComp>
      </div>
      <ButtonComp
        className='task-drag-bar'
        onMouseDown={mouseDownDrag}
      ></ButtonComp>
    </article>
  );
}
