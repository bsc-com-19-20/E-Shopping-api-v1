import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto, EditUsersDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/add')
  addUsersItem(@Body() users: CreateUsersDto) {
    return this.usersService.createUsers(users);
  }

  @Get('/list')
  listUsers() {
    return this.usersService.showUsers();
  }

  @Get('/showOneUser/:id')
  findOneUser(@Param('id') id: number) {
    return this.usersService.showSingleUser(id);
  }

  @Delete('/delete/:id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteSingleUser(id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: number, @Body() updateUser: CreateUsersDto) {
    return this.usersService.updateUser(id, updateUser);
  }
}
