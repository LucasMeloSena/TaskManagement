import { Injectable } from '@nestjs/common';
import { Task } from '../../entities/task';
import { TasksRepository } from '../../repositories/tasks.repository';
import { TaskStatus } from '@prisma/client';

interface UpdateTaskStatusUseCaseRequest {
  id: string;
  status: TaskStatus;
}

interface UpdateTaskStatusUseCaseRsponse {
  task: Task;
}

@Injectable()
export class UpdateTaskStatusUseCase {
  constructor(private taskRepository: TasksRepository) {}

  async execute({
    id,
    status,
  }: UpdateTaskStatusUseCaseRequest): Promise<UpdateTaskStatusUseCaseRsponse> {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new Error("This task doesn't exists.");
    }

    task.changeStatus(status);

    const updated_task = await this.taskRepository.update(task);

    return {
      task: updated_task,
    };
  }
}
