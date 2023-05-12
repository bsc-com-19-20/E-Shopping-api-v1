import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { EditUsersDto } from './dtos';

@Injectable()
export class UsersService {
  updateUsers(id: number, updateUsersDto: EditUsersDto) {
      throw new Error('Method not implemented.');
  }
  deleteUsers(id: number) {
      throw new Error('Method not implemented.');
  }
  fetchUsers() {
      throw new Error('Method not implemented.');
  }
  findOneBy(arg0: { username: any; }) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async createUsers(user: Users): Promise<Users> {
    const newUser = this.usersRepository.create(user);
    return await this.usersRepository.save(newUser);
  }

  
  async findOne( name: string): Promise<Users> {
    return await this.usersRepository.findOneBy({name});
  }

  async getUsersByEmail(email: string): Promise<Users> {
    return await this.usersRepository.findOneBy({ email });
  }

  async getUsersById(id: number): Promise<Users> {
    return await this.usersRepository.findOneBy({id});
  }
}
