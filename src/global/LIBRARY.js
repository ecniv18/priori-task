import Project from "./Project";

export default (function LIBRARY() {
  function getProjects() {
    if (localStorage.length === 0) {
      // creates an object on the localStorage for the first time only
      localStorage.setItem("projects", JSON.stringify([]));
    }
    return JSON.parse(localStorage.projects);
  }

  function updateStorage(list) {
    localStorage.setItem("projects", JSON.stringify(list));
  }

  function createProject(name) {
    // pushes a new project to the front of the localStorage || stack like structure
    const newList = getProjects();
    newList.unshift(new Project(name));
    updateStorage(newList);
  }

  function deleteProject(id) {
    const newList = getProjects().filter((p) => p.id !== id);
    updateStorage(newList);
  }

  return {
    getProjects,
    createProject,
    deleteProject,
  };
})();
