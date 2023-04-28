import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  findOneBy(arg0: { username: any; }) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async createUsers(name: string, email: string, password: string): Promise<Users> {
    const users = new Users();
    users.name = name;
    users.email = email;
    users.password = password;
    return await this.usersRepository.save(users);
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
