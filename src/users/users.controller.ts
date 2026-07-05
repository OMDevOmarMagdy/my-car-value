import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersServices: UsersService) {}

  @Post('/signUp')
  createUser(@Body() body: CreateUserDto) {
    // You can do anything you want
    console.log(body);
    this.usersServices.create(body.email, body.password);
  }

  @Get('/:id')
  async findUser(@Param('id') id: string) {
    const user = await this.usersServices.findOne(parseInt(id));
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersServices.find(email);
  }

  @Patch('/:id')
  updateUser(@Body() body: UpdateUserDto, @Param('id') id: string) {
    return this.usersServices.update(parseInt(id), body);
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersServices.delete(parseInt(id));
  }
}
