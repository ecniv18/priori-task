import { v4 as uuidv4 } from "uuid";

export default class Task {
  constructor({ title, description, dueDate, priority, projectId }) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.id = uuidv4();
    this.projectId = projectId;
    this.completed = false;
  }
}
