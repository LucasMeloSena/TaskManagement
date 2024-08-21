import { DatabaseModule } from 'src/database/database.module';
import { TasksController } from './controllers/tasks.controller';
import { CreateTaskUseCase } from 'src/use-cases/task/create';
import { UpdateTaskStatusUseCase } from 'src/use-cases/task/update';
import { FindManyTasksUseCase } from 'src/use-cases/task/find-many';
import { DeleteTaskUseCase } from 'src/use-cases/task/delete';
import { Module } from '@nestjs/common';
import { UsersController } from './controllers/user.controller';
import { CreateUserUseCase } from 'src/use-cases/user/register';
import { AuthenticateUseCase } from 'src/use-cases/user/authenticate';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController, UsersController],
  providers: [
    CreateTaskUseCase,
    UpdateTaskStatusUseCase,
    FindManyTasksUseCase,
    DeleteTaskUseCase,
    CreateUserUseCase,
    AuthenticateUseCase,
  ],
})
export class HttpModule {}
