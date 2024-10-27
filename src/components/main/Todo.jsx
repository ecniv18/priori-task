export default function Todo({ title, id, description, priority }) {
  return (
    <article id={id} className='todo'>
      <h2 className='todo-title'>{title}</h2>
      <p className='todo-description'>{description}</p>
      <span>{priority}</span>
    </article>
  );
}
