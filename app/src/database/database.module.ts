import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TasksRepository } from 'src/repositories/tasks.repository';
import { PrismaTasksRepository } from 'src/repositories/prisma/prisma.tasks';

@Module({
  providers: [
    PrismaService,
    {
      provide: TasksRepository,
      useClass: PrismaTasksRepository,
    },
  ],
  exports: [TasksRepository],
})
export class DataBaseModule {}
