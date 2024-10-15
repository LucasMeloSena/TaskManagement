import { AuthenticateUseCase } from './authenticate';
import { InMemoryUserRepository } from '../../repositories/in-memory/in-memory.user';
import { CreateUserUseCase } from './register';

describe('Authenticate User Use Case', () => {
  const usersRepository = new InMemoryUserRepository();
  const sut = new AuthenticateUseCase(usersRepository);
  const createUser = new CreateUserUseCase(usersRepository);

  it('should be able to authenticate', async () => {
    await createUser.execute({
      email: 'johndoe@example.com',
      password: '123456',
    });

    const { user } = await sut.execute({
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });
});
