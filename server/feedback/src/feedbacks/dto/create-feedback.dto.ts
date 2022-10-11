import { IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateFeedback {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly message: string;
}
