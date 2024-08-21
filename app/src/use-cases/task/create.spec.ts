import { CreateTaskUseCase } from './create';
import { InMemoryTasksRepository } from '../../repositories/in-memory/in-memory.tasks';

describe('Create Task', () => {
  const taskRepository = new InMemoryTasksRepository();
  const sut = new CreateTaskUseCase(taskRepository);

  it('should be able to create a task', async () => {
    const { task } = await sut.execute({
      user_id: 'user-01',
      title: 'Task Title',
      description: 'Task Description',
    });
    expect(task.id).toEqual(expect.any(String));
  });
});
