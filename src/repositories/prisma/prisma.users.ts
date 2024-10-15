import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import { PrismaService } from 'src/database/prisma.service';
import { User } from 'src/entities/user';
import { UserMapper } from 'src/helpers/mapper/user';

@Injectable()
export class PrismaUsersRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(user: User) {
    const raw = UserMapper.toPrisma(user);
    const created_user = await this.prisma.user.create({
      data: raw,
    });
    return UserMapper.toDomain(created_user);
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) return null;
    return UserMapper.toDomain(user);
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) return null;
    return UserMapper.toDomain(user);
  }
}
