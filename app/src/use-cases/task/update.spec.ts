import { TaskStatus } from '@prisma/client';
import { InMemoryTasksRepository } from '../../repositories/in-memory/in-memory.tasks';
import { CreateTaskUseCase } from './create';
import { UpdateTaskStatusUseCase } from './update';

describe('Update Task', () => {
  const taskRepository = new InMemoryTasksRepository();
  const sut = new UpdateTaskStatusUseCase(taskRepository);
  const createTaskUseCase = new CreateTaskUseCase(taskRepository);

  it('should be able to find tasks', async () => {
    const { task } = await createTaskUseCase.execute({
      user_id: 'user-01',
      title: 'Task Title',
      description: 'Task Description',
    });

    const updated_task = await sut.execute({
      id: task.id,
      status: TaskStatus.IN_PROGRESS,
    });

    expect(updated_task.task.status).toEqual(TaskStatus.IN_PROGRESS);
  });
});
