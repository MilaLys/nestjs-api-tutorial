import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// @ts-ignore
import { User } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { UserCreateDTO, UserEditDTO } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  createUser(dto: UserCreateDTO) {
    return this.prisma.user.create({ data: { ...dto } });
  }

  getUser(user: User) {
    return this.prisma.user.findUnique({ where: { id: user.id } });
  }

  getUserByEmail(email: string) {
    const user = this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async editUser(userId: number, dto: UserEditDTO) {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { ...dto }
    });

    delete user.hash;

    return user;
  }
}
