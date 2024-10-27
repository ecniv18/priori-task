import Project from "../class/Project";
import Task from "../class/Task";

const LIBRARY = (function () {
  /**
   * manual initiation of default project becuase it is different from the actual
   * Project Object
   * default project will hold all the Task Ojects while the Task object will be the one that holds the ID * of the Project that it supposed to be in.
   * by doing it this way saves a few memory in exchange for performance although the App won't need a lot * of performance anyway, so it's worth it
   */
  if (localStorage.length === 0) {
    localStorage.library = JSON.stringify([
      { name: "default", id: 0, tasks: [] },
    ]);
  }

  /**
   * library variable for easy reference,
   * NOTE: localStorage.library and library variable are different, by updating
   * the library variable doesn't affect the localStorage.library, library is just the reference of the
   * localStorage.library
   * METHODS that UPDATES the localStorage.library will always update the library first then pass it's
   *  value to the localStorage.library
   * UPDATER CODE: localStorage.library = JSON.stringify(library) // library is updated first before passing
   * that way, we always when we update the localStorage we updates the library variable first
   **/
  let library = JSON.parse(localStorage.library);

  // this stores the current active project for easy reference
  let activeProject;

  function createProject(name) {
    const project = new Project(name);
    library.push(project);
    updateLibrary(library);
    setActiveProject(project.id);
  }

  function createTask({ title, description, dueDate, priority }) {
    const task = new Task({
      title,
      description,
      dueDate,
      priority,
      projectId: activeProject.id,
    });
    library[0].tasks.push(task);
    library = library.map((proj) => {
      if (proj.id === activeProject.id) {
        proj.taskCount += 1;
      }
      return proj;
    });
    updateLibrary(library);
  }

  function getProject(id) {
    if (id === undefined || id === null) {
      return JSON.parse(localStorage.library);
    }
    // localStorage.library will also work
    return library.filter((proj) => proj.id === id).shift();
  }

  function deleteProject(id) {
    if (id === 0) return;
    let isTargetProjectActive = getProject(id).active;
    // update the tasks without all the tasks that contains the target project's ID
    library[0].tasks = library[0].tasks.filter((task) => task.projectId !== id);
    // updates library without the target project
    library = library.filter((proj) => proj.id !== id);
    updateLibrary(library);
    // if the target project for deletion is the current active we set the default project as the active
    if (isTargetProjectActive) {
      setActiveProject(0);
    } else {
      setActiveProject(activeProject.id);
    }
  }

  function setActiveProject(id) {
    /**
     * map out the current project array and change the target project's active status, then update the
     * localStorage
     */
    library = getProject().map((proj) => {
      proj.active = proj.id === id ? true : false;
      return proj;
    });
    updateLibrary(library);
    // assign the activeProject to what ever project is currently active
    activeProject = getProject()
      .filter((proj) => proj.active)
      .shift();
  }

  function getActiveProject() {
    // loop would be safer but since we always update the activeProject at line:65, this should work fine
    return activeProject;
  }

  function getTasks(projectId) {
    /**
     * if nothing is passed we just get the default project's tasks
     * or else, filter the tasks that contains the projectId
     *
     * NOTE: Task holds the the project's ID that it supposed to be in
     */
    if (projectId === undefined || projectId === 0) {
      return getProject(0).tasks;
    } else if (projectId !== 0) {
      return getProject(0).tasks.filter((task) => task.projectId === projectId);
    }
  }

  function updateLibrary(library) {
    localStorage.library = JSON.stringify(library);
  }
  // initiate the default project as the active project
  if (!getActiveProject()) {
    setActiveProject(0);
  }

  return {
    createProject,
    createTask,
    getProject,
    setActiveProject,
    getActiveProject,
    getTasks,
    deleteProject,
  };
})();

export default LIBRARY;
