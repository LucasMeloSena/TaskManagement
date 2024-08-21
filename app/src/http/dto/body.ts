import { TaskStatus } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateTaskBody {
  @IsNotEmpty()
  @IsUUID()
  user_id: string;

  @IsNotEmpty()
  @Length(3)
  title: string;

  @IsNotEmpty()
  @Length(5, 240)
  description: string;
}

export class UpdateTaskBody {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}

export class CreateUserBody {
  @IsNotEmpty()
  @IsUUID()
  email: string;

  @IsNotEmpty()
  @Length(6)
  password: string;
}
