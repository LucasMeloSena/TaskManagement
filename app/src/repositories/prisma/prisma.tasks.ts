import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../tasks.repository';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaTaskMapper } from 'src/helpers/mapper';
import { Task } from 'src/entities/task';

@Injectable()
export class PrismaTasksRepository implements TasksRepository {
  constructor(private prisma: PrismaService) {}

  async create(task: Task) {
    const raw = PrismaTaskMapper.toPrisma(task);
    const new_task = await this.prisma.task.create({
      data: raw,
    });
    return PrismaTaskMapper.toDomain(new_task);
  }

  async findById(id: string) {
    const task = await this.prisma.task.findUnique({
      where: {
        id,
      },
    });
    return PrismaTaskMapper.toDomain(task);
  }

  async findMany(user_id: string) {
    const tasks = await this.prisma.task.findMany({
      where: {
        user_id,
      },
    });
    return tasks.map(PrismaTaskMapper.toDomain);
  }

  async update(task: Task) {
    const raw = PrismaTaskMapper.toPrisma(task);
    const updated_task = await this.prisma.task.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
    return PrismaTaskMapper.toDomain(updated_task);
  }

  async delete(id: string) {
    await this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
