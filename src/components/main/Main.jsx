import LIBRARY from "../../modules/library";
import Nav from "../nav/Nav";
import { useState } from "react";
import TaskForm from "./Task-form";
import Task from "./Task";

export default function Main() {
  const [tasks, setTasks] = useState(LIBRARY.getTasks());
  const [isTaskFormOpen, setIsTaskFormOpen] = useState(false);
  const [projectList, setProjectList] = useState(LIBRARY.getProject());

  function createProject(name) {
    LIBRARY.createProject(name);
    scanProjects();
  }

  function createTask(value) {
    LIBRARY.createTask(value);
    scanTasks();
  }

  function deleteProject(id) {
    LIBRARY.deleteProject(id);
    scanProjects();
    scanTasks();
  }

  function setActiveProject(id) {
    LIBRARY.setActiveProject(id);
    scanProjects();
    scanTasks();
  }

  function scanProjects() {
    setProjectList(LIBRARY.getProject());
  }

  function scanTasks() {
    setTasks(LIBRARY.getTasks(LIBRARY.getActiveProject().id));
  }

  return (
    <main className='main'>
      <Nav
        createProject={createProject}
        setActiveProject={setActiveProject}
        projectList={projectList}
        deleteProject={deleteProject}
      />

      <section className='todo_list'>
        {isTaskFormOpen && (
          <TaskForm
            createTask={createTask}
            closeForm={() => setIsTaskFormOpen(false)}
          />
        )}
        <button
          onClick={() => setIsTaskFormOpen(true)}
          className='main-task_form_button'
        >
          New Task
        </button>
        <TaskLists tasks={tasks} />
      </section>
    </main>
  );
}

function TaskLists({ tasks }) {
  return (
    <>
      {tasks.length > 0
        ? tasks.map((task) => <Task key={task.id} {...task} />)
        : "Empty Project"}
    </>
  );
}
