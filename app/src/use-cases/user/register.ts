import { hash } from 'bcryptjs';
import { User } from '../../entities/user';
import { UserRepository } from '../../repositories/users.repository';

interface CreateUserUseCaseRequest {
  email: string;
  password: string;
}

interface CreateUserUseCaseResponse {
  user: User;
}

export class CreateUserUseCase {
  constructor(private usersRepository: UserRepository) {}

  async execute({
    email,
    password,
  }: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const password_hash = await hash(password, 6);

    const userWithSameEmail = await this.usersRepository.findByEmail(email);
    if (userWithSameEmail) {
      throw new Error('User already exists.');
    }

    const new_user = new User({
      email,
      password: password_hash,
    });

    const user = await this.usersRepository.create(new_user);

    return {
      user,
    };
  }
}
