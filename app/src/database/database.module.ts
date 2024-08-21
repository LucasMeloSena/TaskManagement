import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { TasksRepository } from 'src/repositories/tasks.repository';
import { PrismaTasksRepository } from 'src/repositories/prisma/prisma.tasks';
import { UserRepository } from 'src/repositories/users.repository';
import { PrismaUsersRepository } from 'src/repositories/prisma/prisma.users';

@Module({
  providers: [
    PrismaService,
    {
      provide: TasksRepository,
      useClass: PrismaTasksRepository,
    },
    {
      provide: UserRepository,
      useClass: PrismaUsersRepository,
    },
  ],
  exports: [TasksRepository],
})
export class DatabaseModule {}
