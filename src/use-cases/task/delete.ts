import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../../repositories/tasks.repository';

interface DeleteTaskUseCaseRequest {
  id: string;
}

@Injectable()
export class DeleteTaskUseCase {
  constructor(private taskRepository: TasksRepository) {}

  async execute({ id }: DeleteTaskUseCaseRequest): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
