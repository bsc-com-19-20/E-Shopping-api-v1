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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({
    summary: ' adding a user',
    description:
      'By running this router , you will be adding the user to the database. for example"{"id" : 1,"name": "Ben""email": "ben1@gmail.com","password": "bennie" }" this will add user named Ben with email ben1@gmail.com, with password bennie and id 1.',
    operationId: '',
  })
  @Post('/add')
  addUsersItem(@Body() users: CreateUsersDto) {
    return this.usersService.createUsers(users);
  }

  @ApiOperation({
    summary: 'listing all users',
    description:
      'By running this route, you will get the list of all users the users in the database. You can only get these users if you have already added them in the database otherwise this router will give you nothing.',
    operationId: '',
  })
  @Get('/list')
  listUsers() {
    return this.usersService.showUsers();
  }

  @ApiOperation({
    summary: 'getting one user',
    description:
      'This router will return or get a single user from the database and display that single user.This will need you to specity which user in the database do you wish to see by putting the his/her id.',
    operationId: '',
  })
  @Get('/showOneUser/:id')
  findOneUser(@Param('id') id: number) {
    return this.usersService.showSingleUser(id);
  }

  @ApiOperation({
    summary: 'deleting a user',
    description:
      'This will delete a user from a database.You can only delete the single user at a time by specifying the id of the user you wish to delete.',
    operationId: '',
  })
  @Delete('/delete/:id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteSingleUser(id);
  }

  @ApiOperation({
    summary: 'updating a user',
    description:
      'This will update a user in your database when ever you wish to make changes to the already exist user details. This will also need you to specify the user id.',
    operationId: '',
  })
  @Patch('/update/:id')
  update(@Param('id') id: number, @Body() updateUser: CreateUsersDto) {
    return this.usersService.updateUser(id, updateUser);
  }
}
