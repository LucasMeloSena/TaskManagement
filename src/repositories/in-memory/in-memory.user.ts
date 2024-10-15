import { User } from 'src/entities/user';
import { UserRepository } from '../users.repository';

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async create(user: User) {
    this.users.push(user);
    return user;
  }

  async findById(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) return null;
    return user;
  }

  async findByEmail(email: string) {
    const user = this.users.find((user) => user.email === email);
    if (!user) return null;
    return user;
  }
}
