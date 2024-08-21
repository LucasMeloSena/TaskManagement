import { Task } from 'src/entities/task';
import { Task as RawTask } from '@prisma/client';

export class PrismaTaskMapper {
  static toPrisma(task: Task) {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status,
      created_at: task.created_at,
      user_id: task.user_id,
    };
  }

  static toDomain(raw: RawTask): Task {
    return new Task({
      id: raw.id,
      title: raw.title,
      description: raw.description,
      status: raw.status,
      created_at: raw.created_at,
      user_id: raw.user_id,
    });
  }
}
