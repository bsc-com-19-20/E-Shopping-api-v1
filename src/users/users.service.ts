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
    const newUser = this.usersRepository.create(user);
    return await this.usersRepository.save(newUser);
  }

  async findOne(name: string): Promise<Users> {
    return await this.usersRepository.findOneBy({ name });
  }

  //   async getUsersByEmail(email: string): Promise<Users> {
  //     return await this.usersRepository.findOneBy({ email });
  //   }

  //   async getUsersById(id: number): Promise<Users> {
  //     return await this.usersRepository.findOneBy({ id });
  //   }
}
