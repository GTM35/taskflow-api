import { randomInt } from "node:crypto";
import fs from "node:fs/promises";

const DATABASE_PATH = new URL("dbTasks.json", import.meta.url);
const DATABASE_PATH_PROJECTS = new URL("dbProjects.json", import.meta.url);

export class DatabaseTasks {
  #database = {};
  #databaseProjects = {};

  constructor() {
    fs.readFile(DATABASE_PATH, "utf-8")
      .then((data) => (this.#database = JSON.parse(data)))
      .catch(() => {
        this.#persist;
      });

    fs.readFile(DATABASE_PATH_PROJECTS, "utf-8")
      .then((data) => (this.#databaseProjects = JSON.parse(data)))
      .catch(() => (this.#databaseProjects = {}));
  }

  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
  }

  insert(table, data) {
    const { project_id } = data;

    const task = {
      ...data,
      id_task: randomInt(100),
    };

    const rowIndex = this.#databaseProjects["projects"].findIndex(
      (row) => row.id == project_id,
    );

    if (rowIndex > -1) {
      if (Array.isArray(this.#database[table])) {
        this.#database[table].push(task);
      } else {
        this.#database[table] = [task];
      }
    } else {
      return false;
    }

    this.#persist();
  }

  select(table) {
    let data = this.#database[table] ?? [];

    return data;
  }

  update(table, id, data) {
    const rowIndex = this.#database[table].findIndex(
      (row) => row.id_task == id,
    );

    if (rowIndex > -1) {
      this.#database[table][rowIndex] = {
        ...this.#database[table][rowIndex],
        ...data,
      };
    }

    this.#persist();
  }

  updateStatus(table, id, status) {
    const taskIndex = this.#database[table].findIndex(
      (task) => task.id_task === id,
    );

    if (taskIndex > -1) {
      this.#database[table][taskIndex].status = status;
    }

    this.#persist();
  }

  remove(table, id) {
    const taskIndex = this.#database[table].findIndex(
      (task) => task.id_task === id,
    );

    if (taskIndex > -1) {
      this.#database[table].splice(taskIndex, 1);
    }

    this.#persist();
  }
}
