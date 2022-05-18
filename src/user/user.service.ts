import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { UserEditDto } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getUser(user: User) {
    return this.prisma.user.findUnique({
      where: {
        id: user.id
      }
    });
  }

  async editUser(userId: number, dto: UserEditDto) {
    const user = await this.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        ...dto
      }
    });

    delete user.hash;

    return user;
  }
}
