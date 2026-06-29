import { Body, Controller, Post } from '@nestjs/common';
import { createUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class UsersController {
  @Post('/signUp')
  createUser(@Body() body: createUserDto) {
    // You can do anything you want
    console.log(body);
  }
}
