import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { CreateUsersDto, EditUsersDto } from './dtos';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async createUsers(user: CreateUsersDto): Promise<Users> {
    const newUser = this.usersRepository.create({ ...user });
    return await this.usersRepository.save(newUser);
  }

  async findOne(name: string): Promise<Users> {
    return await this.usersRepository.findOneBy({ name });
  }

  showUsers() {
    return this.usersRepository.find();
  }

  showSingleUser(id: any) {
    return this.usersRepository.findOneBy({ id });
  }

  deleteSingleUser(id: number) {
    this.usersRepository.delete({ id });
    return 'User deleted Successfully';
  }

  updateUser(id: number, updateUser: CreateUsersDto) {
    this.usersRepository.update({ id }, { ...updateUser });
    return 'User updated Successfully';
  }
}
