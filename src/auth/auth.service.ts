import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(name, pass) {
    const users = await this.usersService.findOne(name);
    if (users?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { name: users.name, sub: users.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}