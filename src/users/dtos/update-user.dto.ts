import { IsEmail, IsOptional, IsString } from 'class-validator';

// Dto --> used to validate the incomming data in the body request
export class UpdateUserDto {
  @IsEmail()
  @IsOptional()
  email!: string;

  @IsString()
  @IsOptional()
  password!: string;
}
