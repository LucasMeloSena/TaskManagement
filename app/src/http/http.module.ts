import { DatabaseModule } from 'src/database/database.module';
import { TasksController } from './controllers/tasks.controller';
import { CreateTaskUseCase } from 'src/use-cases/task/create';
import { UpdateTaskStatusUseCase } from 'src/use-cases/task/update';
import { FindManyTasksUseCase } from 'src/use-cases/task/find-many';
import { DeleteTaskUseCase } from 'src/use-cases/task/delete';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController],
  providers: [
    CreateTaskUseCase,
    UpdateTaskStatusUseCase,
    FindManyTasksUseCase,
    DeleteTaskUseCase,
  ],
})
export class HttpModule {}
