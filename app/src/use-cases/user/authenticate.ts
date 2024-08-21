import { compare } from 'bcryptjs';
import { User } from 'src/entities/user';
import { UserRepository } from 'src/repositories/users.repository';

interface AuthenticateUseCaseRequest {
  email: string;
  password: string;
}

interface AuthenticateUseCaseResponse {
  user: User;
}

export class AuthenticateUseCase {
  constructor(private usersRepository: UserRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) throw new Error('Invalid credencials.');

    const doesPasswordMatches = await compare(password, user.password);
    if (!doesPasswordMatches) throw new Error('Invalid credencials.');

    return {
      user,
    };
  }
}
