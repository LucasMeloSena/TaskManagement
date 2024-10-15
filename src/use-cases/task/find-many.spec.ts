import { InMemoryTasksRepository } from '../../repositories/in-memory/in-memory.tasks';
import { CreateTaskUseCase } from './create';
import { FindManyTasksUseCase } from './find-many';

describe('Find Tasks', () => {
  const taskRepository = new InMemoryTasksRepository();
  const sut = new FindManyTasksUseCase(taskRepository);
  const createTaskUseCase = new CreateTaskUseCase(taskRepository);

  it('should be able to find tasks', async () => {
    const { task } = await createTaskUseCase.execute({
      user_id: 'user-01',
      title: 'Task Title',
      description: 'Task Description',
    });

    const { tasks } = await sut.execute({
      user_id: task.user_id,
    });

    expect(tasks).toHaveLength(1);
  });
});
