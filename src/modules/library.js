import Project from "../class/Project";

const LIBRARY = (function () {
  let activeProject;

  if (localStorage.length === 0) {
    localStorage.library = JSON.stringify([
      { name: "default", id: 0, todos: [] },
    ]);
  }

  let library = JSON.parse(localStorage.library);

  function createProject(name) {
    library.push(new Project(name));
    localStorage.library = JSON.stringify(library);
  }

  function getProject(id) {
    if (id === undefined || id === null) {
      return JSON.parse(localStorage.library);
    }
    return library.filter((proj) => proj.id === id).shift();
  }

  function deleteProject(id) {
    if (id === 0) return;
    library = library.filter((proj) => proj.id !== id);
    localStorage.library = JSON.stringify(library);
  }

  function setActiveProject(id) {
    let newLibrary = getProject().map((proj) => {
      proj.active = proj.id === id ? true : false;
      return proj;
    });
    localStorage.library = JSON.stringify(newLibrary);
    activeProject = getProject()
      .filter((proj) => proj.active)
      .shift();
  }

  function getActiveProject() {
    return activeProject;
  }

  function getTodos(projectId) {
    if (projectId !== undefined) {
      return getProject(0).todos.filter((todo) => todo.projectId === projectId);
    } else {
      return getProject(0).todos;
    }
  }

  activeProject = getProject(0);

  return {
    createProject,
    getProject,
    setActiveProject,
    getActiveProject,
    getTodos,
    deleteProject,
  };
})();

export default LIBRARY;
