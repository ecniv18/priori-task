import LIBRARY from "../../modules/library";

export default function Project({
  name,
  id,
  active,
  setActiveProject,
  deleteProject,
}) {
  return (
    <li className='project'>
      <a
        href='#'
        onClick={() => {
          setActiveProject(id);
        }}
        className='project_name'
      >
        {name}
        {active === true && "*"}
      </a>
      {id !== 0 && (
        <button
          className='delete_project'
          // Directly delete the project from the LIBRARY
          onClick={() => deleteProject(id)}
        >
          Delete
        </button>
      )}
    </li>
  );
}
