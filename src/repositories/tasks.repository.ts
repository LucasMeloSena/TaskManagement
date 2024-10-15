import { Task } from 'src/entities/task';

export abstract class TasksRepository {
  abstract create(task: Task): Promise<Task>;
  abstract findById(id: string): Promise<Task | null>;
  abstract findMany(user_id: string): Promise<Task[]>;
  abstract update(task: Task): Promise<Task>;
  abstract delete(id: string): Promise<void>;
}
