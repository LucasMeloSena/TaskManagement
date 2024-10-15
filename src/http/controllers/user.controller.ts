import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateUserBody } from '../dto/body';
import { CreateUserUseCase } from 'src/use-cases/user/register';
import { AuthenticateUseCase } from 'src/use-cases/user/authenticate';
import { UserMapper } from 'src/helpers/mapper/user';

@Controller('user')
export class UsersController {
  constructor(
    private createUser: CreateUserUseCase,
    private authenticateUser: AuthenticateUseCase,
  ) {}

  @Post()
  async create(@Body() body: CreateUserBody) {
    const { email, password } = body;

    const { user } = await this.createUser.execute({
      email,
      password,
    });

    return {
      user: UserMapper.toHTTP(user),
    };
  }

  @Post('/authenticate')
  @HttpCode(200)
  async authenticate(@Body() body: CreateUserBody) {
    const { email, password } = body;
    const { user } = await this.authenticateUser.execute({ email, password });
    return {
      user: UserMapper.toHTTP(user),
    };
  }
}
