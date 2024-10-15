import { TaskStatus } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, IsUUID, Length } from 'class-validator';

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
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6)
  password: string;
}
