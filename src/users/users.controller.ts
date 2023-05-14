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

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  // @Get()
  // getUsers() {
  //   return this.usersService.fetchUsers();
  // }

  @Post()
  addUsersItem(@Body() users: CreateUsersDto) {
    return this.usersService.createUsers(users);
  }

  //   @Delete(':id')
  // async deleteUsers(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() product_name: String,
  // ) {
  //   return await this.usersService.deleteUsers(id);
  // }
  // @Patch(':id')
  // async update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() updateUsersDto: EditUsersDto,
  // ) {
  //   return await this.usersService.updateUsers(id, updateUsersDto);
  // }
}
