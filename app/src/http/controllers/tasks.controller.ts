import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTaskUseCase } from 'src/use-cases/task/create';
import { DeleteTaskUseCase } from 'src/use-cases/task/delete';
import { FindManyTasksUseCase } from 'src/use-cases/task/find-many';
import { UpdateTaskStatusUseCase } from 'src/use-cases/task/update';
import { CreateTaskBody, UpdateTaskBody } from '../dto/body';
import { TaskMapper } from 'src/helpers/mapper/task';

@Controller('tasks')
export class TasksController {
  constructor(
    private createTask: CreateTaskUseCase,
    private findManyTasks: FindManyTasksUseCase,
    private udpateTask: UpdateTaskStatusUseCase,
    private deleteTask: DeleteTaskUseCase,
  ) {}

  @Post()
  async create(@Body() body: CreateTaskBody) {
    const { user_id, title, description } = body;

    const { task } = await this.createTask.execute({
      user_id,
      title,
      description,
    });

    return {
      task: TaskMapper.toHTTP(task),
    };
  }

  @Get(':user_id')
  async findMany(@Param('user_id') user_id: string) {
    const { tasks } = await this.findManyTasks.execute({ user_id });
    return {
      tasks: tasks.map(TaskMapper.toHTTP),
    };
  }

  @Patch(':id/status')
  async update(@Body() body: UpdateTaskBody, @Param('id') id: string) {
    const { status } = body;
    const { task } = await this.udpateTask.execute({ id, status });
    return {
      task: TaskMapper.toHTTP(task),
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.deleteTask.execute({ id });
    return {
      message: 'Task deleted successfully',
    };
  }
}
