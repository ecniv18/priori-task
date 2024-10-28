import "./style.css";
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
    scanTasks();
  }

  function createTask(value) {
    LIBRARY.createTask(value);
    scanTasks();
  }

  function deleteProject(projectId) {
    LIBRARY.deleteProject(projectId);
    scanProjects();
    scanTasks();
  }

  function deleteTask(taskId) {
    LIBRARY.deleteTask(taskId);
    scanProjects();
    scanTasks();
  }

  function editTask(taskId, value) {
    LIBRARY.editTask(taskId, value);
    scanTasks();
  }

  function completeTask(taskId) {
    LIBRARY.completeTask(taskId);
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

      <section className='task_section'>
        {isTaskFormOpen && (
          <TaskForm
            createTask={createTask}
            closeForm={() => setIsTaskFormOpen(false)}
            mode='create'
          />
        )}
        <button
          onClick={() => setIsTaskFormOpen(true)}
          className='main-task_form_button'
        >
          New Task
        </button>
        <div className='task_list'>
          <TaskLists
            tasks={tasks}
            deleteTask={deleteTask}
            editTask={editTask}
            completeTask={completeTask}
          />
        </div>
      </section>
    </main>
  );
}

function TaskLists({ tasks, deleteTask, editTask, completeTask }) {
  return (
    <>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            deleteTask={deleteTask}
            editTask={editTask}
            completeTask={completeTask}
          />
        ))
      ) : (
        <div className='no_task_msg box'>
          <h3>No Tasks Yet</h3>
        </div>
      )}
    </>
  );
}
