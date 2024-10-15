import { Injectable } from '@nestjs/common';
import { Task } from '../../entities/task';
import { TasksRepository } from '../../repositories/tasks.repository';
import { UserRepository } from 'src/repositories/users.repository';

interface CreateTaskUseCaseRequest {
  title: string;
  description: string;
  user_id: string;
}

interface CreateTaskUseCaseRsponse {
  task: Task;
}

@Injectable()
export class CreateTaskUseCase {
  constructor(
    private taskRepository: TasksRepository,
    private userRepository: UserRepository,
  ) {}

  async execute({
    title,
    description,
    user_id,
  }: CreateTaskUseCaseRequest): Promise<CreateTaskUseCaseRsponse> {
    const user = await this.userRepository.findById(user_id);
    if (!user) throw new Error("This user doesn't exists.");

    const task = new Task({
      title,
      description,
      user_id,
    });

    const created_task = await this.taskRepository.create(task);

    return {
      task: created_task,
    };
  }
}
