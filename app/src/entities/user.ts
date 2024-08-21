import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/replace';

export interface UserProps {
  id: string;
  email: string;
  password: string;
  created_at: Date;
}

export class User {
  private props: UserProps;

  constructor(props: Replace<UserProps, { id?: string; created_at?: Date }>) {
    this.props = {
      ...props,
      id: props.id ?? randomUUID(),
      created_at: props.created_at ?? new Date(),
    };
  }

  public get id() {
    return this.props.id;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get email(): string {
    return this.props.email;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get password(): string {
    return this.props.password;
  }

  public get created_at(): Date {
    return this.props.created_at;
  }
}
