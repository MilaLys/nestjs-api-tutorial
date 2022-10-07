import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
// @ts-ignore
import { User } from '@prisma/client';

import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { UserCreateDTO, UserEditDTO } from './dto';
import { UserService } from './user.service';

@ApiTags('users')
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiCreatedResponse({ type: UserCreateDTO })
  @Post('')
  createUser(@Body() dto: UserCreateDTO) {
    return this.userService.createUser(dto);
  }

  @Get('me')
  getMe(@GetUser() user: User) {
    return this.userService.getUser(user);
  }

  @Get('')
  getUserByEmail(email: string) {
    return this.userService.getUserByEmail(email);
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: UserEditDTO) {
    return this.userService.editUser(userId, dto);
  }
}
