import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, SerializeOptions, UseGuards } from '@nestjs/common';

import RequestWithUser from './req-with-user.interface';
import { AuthDTO } from './dto';
import { AuthService } from './auth.service';
import { JwtGuard } from './guard';

@ApiTags('auth')
@Controller('auth')
@SerializeOptions({ strategy: 'excludeAll' })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  signUp(@Body() dto: AuthDTO) {
    return this.authService.signUp(dto);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtGuard)
  @Post('sign-in')
  async signIn(@Req() request: RequestWithUser) {
    const { user } = request;
    const cookie = this.authService.getCookieWithJWTToken(user.id);

    request.res.setHeader('Set-Cookie', cookie);

    return user;
  }

  @UseGuards(JwtGuard)
  @Post('sign-out')
  signOut(@Req() request: RequestWithUser) {
    request.res.setHeader('Set-Cookie', this.authService.getCookieForLogOut());

    return request.res.sendStatus(200);
  }

  @UseGuards(JwtGuard)
  @Get('sign-out')
  authenticate(@Req() request: RequestWithUser) {
    const user = request.user;
    user.hash = undefined;

    return user;
  }
}
