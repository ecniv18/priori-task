import { v4 as uuidv4 } from "uuid";

export default (function LIBRARY() {
  // STORAGE METHODS
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

  // PROJECT METHODS
  function createProject(name) {
    // pushes a new project to the front of the localStorage || stack like structure
    const project = { name: name, id: uuidv4(), list: [], active: false };
    const newList = getProjects();
    newList.unshift(project);
    updateStorage(newList);
  }

  function deleteProject(id) {
    const newList = getProjects().filter((p) => p.id !== id);
    updateStorage(newList);
  }

  function activateProject(id) {
    const newList = getProjects().map((p) => {
      if (p.id === id) {
        p.active = true;
      } else {
        p.active = false;
      }
      return p;
    });
    updateStorage(newList);
  }

  function getActiveProject() {
    return getProjects()
      .filter((p) => p.active === true)
      .shift();
  }

  // TASKS METHODS
  function createTask(description) {
    const task = {
      description,
      projectId: getActiveProject().id,
      id: uuidv4,
      tab: "tasks",
    };
    const newList = getProjects().map((p) => {
      if (p.id === getActiveProject().id) {
        p.list.unshift(task);
      }
      return p;
    });
    updateStorage(newList);
  }

  function getActiveProjectTasks() {
    if (getActiveProject() === undefined) {
      return [];
    }
    return getActiveProject().list;
  }

  return {
    // PROJECT
    getProjects,
    createProject,
    deleteProject,
    activateProject,
    getActiveProject,
    // TASK
    createTask,
    getActiveProjectTasks,
  };
})();
