import { Injectable } from '@nestjs/common';
import { Task } from '../../entities/task';
import { TasksRepository } from '../../repositories/tasks.repository';

interface FindManyTasksUseCaseRequest {
  user_id: string;
}

interface FindManyTasksUseCaseRsponse {
  tasks: Task[];
}

@Injectable()
export class FindManyTasksUseCase {
  constructor(private taskRepository: TasksRepository) {}

  async execute({
    user_id,
  }: FindManyTasksUseCaseRequest): Promise<FindManyTasksUseCaseRsponse> {
    const tasks = await this.taskRepository.findMany(user_id);

    if (!tasks) {
      throw new Error("This user doesn't have a task yet.");
    }

    return {
      tasks,
    };
  }
}
