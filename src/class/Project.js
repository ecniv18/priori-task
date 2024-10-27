import { v4 as uuidv4 } from "uuid";

export default class Project {
  constructor(name, id = uuidv4()) {
    this.name = name;
    this.id = id;
    this.todosId = [];
    this.active = false;
  }
}
