import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/replace';

export enum TaskStatus {
  Pending = 'PENDING',
  InProgress = 'IN_PROGRESS',
  Done = 'DONE',
}

export interface TaskProps {
  id: string;
  user_id: string;
  title: string;
  description: string;
  status: TaskStatus;
  created_at: Date;
}

export class Task {
  private props: TaskProps;

  constructor(
    props: Replace<
      TaskProps,
      { id?: string; created_at?: Date; status?: TaskStatus }
    >,
  ) {
    this.props = {
      ...props,
      id: props.id ?? randomUUID(),
      created_at: props.created_at ?? new Date(),
      status: props.status ?? TaskStatus.Pending,
    };
  }

  public get id() {
    return this.props.id;
  }

  public set user_id(user_id: string) {
    this.props.user_id = user_id;
  }

  public get user_id(): string {
    return this.props.user_id;
  }

  public set title(title: string) {
    this.props.title = title;
  }

  public get title(): string {
    return this.props.title;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public get description(): string {
    return this.props.description;
  }

  public get status(): TaskStatus {
    return this.props.status;
  }

  public get created_at(): Date {
    return this.props.created_at;
  }
}
