import { User } from 'src/entities/user';
import { User as RawUser } from '@prisma/client';

export class UserMapper {
  static toPrisma(user: User) {
    return {
      id: user.id,
      email: user.email,
      password: user.password,
      created_at: user.created_at,
    };
  }

  static toDomain(raw: RawUser): User {
    return new User({
      id: raw.id,
      email: raw.email,
      password: raw.password,
      created_at: raw.created_at,
    });
  }

  static toHTTP(user: User) {
    return {
      id: user.id,
      email: user.email,
      created_at: user.created_at,
    };
  }
}
