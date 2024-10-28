import LIBRARY from "../../modules/library";

export default function Project({
  name,
  id,
  active,
  setActiveProject,
  deleteProject,
}) {
  return (
    <li
      className={active === true ? "nav-project box active" : "nav-project box"}
    >
      <a
        href='#'
        onClick={() => {
          setActiveProject(id);
        }}
        className='nav-project_name'
      >
        {name}
      </a>
      {id !== 0 && (
        <button
          className='nav-project_delete_button'
          // Directly delete the project from the LIBRARY
          onClick={() => deleteProject(id)}
        >
          Delete
        </button>
      )}
    </li>
  );
}
