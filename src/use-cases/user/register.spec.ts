import { CreateUserUseCase } from './register';
import { InMemoryUserRepository } from '../../repositories/in-memory/in-memory.user';

describe('Register User Use Case', () => {
  const usersRepository = new InMemoryUserRepository();
  const sut = new CreateUserUseCase(usersRepository);

  it('should be able to register', async () => {
    const { user } = await sut.execute({
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });
});
