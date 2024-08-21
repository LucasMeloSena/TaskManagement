import { Task } from 'src/entities/task';
import { TasksRepository } from '../tasks.repository';

export class InMemoryTasksRepository implements TasksRepository {
  public tasks: Task[] = [];

  async create(task: Task): Promise<Task> {
    this.tasks.push(task);
    return task;
  }

  async findById(id: string): Promise<Task> {
    return this.tasks.find((task) => task.id === id);
  }

  async findMany(user_id: string): Promise<Task[]> {
    const tasks = this.tasks.filter((task) => task.user_id == user_id);
    return tasks;
  }

  async update(task: Task): Promise<Task> {
    const taskIndex = this.tasks.findIndex((item) => item.id == task.id);
    if (taskIndex >= 0) {
      this.tasks[taskIndex] = task;
    }
    return this.tasks[taskIndex];
  }

  async delete(id: string) {
    const taskIndex = this.tasks.findIndex((item) => item.id == id);
    this.tasks.splice(taskIndex, 1);
  }
}
