import { InMemoryTasksRepository } from '../../repositories/in-memory/in-memory.tasks';
import { CreateTaskUseCase } from './create';
import { DeleteTaskUseCase } from './delete';

describe('Delete Task', () => {
  const taskRepository = new InMemoryTasksRepository();
  const sut = new DeleteTaskUseCase(taskRepository);
  const createTaskUseCase = new CreateTaskUseCase(taskRepository);

  it('should be able to delete a task', async () => {
    const { task } = await createTaskUseCase.execute({
      user_id: 'user-01',
      title: 'Task Title',
      description: 'Task Description',
    });

    await sut.execute({
      id: task.id,
    });

    const findedTask = await taskRepository.findById(task.id);
    expect(findedTask).toBeFalsy();
  });
});
