export default function Task({ title, dueDate, id, description, priority }) {
  return (
    <article id={id} className='todo'>
      <h2 className='todo-title'>{title}</h2>
      <p className='todo-description'>{description}</p>
      <span>{priority}</span>
      <p>{dueDate}</p>
    </article>
  );
}
