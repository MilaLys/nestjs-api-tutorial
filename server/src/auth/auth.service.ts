import bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { ForbiddenException, HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

import PrismaErrorCode from '../../prisma/error-codes.enum';
import TokenPayload from './token-payload.interface';
import { AuthDTO } from './dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  private logger = new Logger('AuthService');

  constructor(private prisma: PrismaService, private jwt: JwtService, private config: ConfigService) {}

  private static async verifyPassword(password: string, hash: string) {
    const isPasswordMatching = await bcrypt.compare(password, hash);

    if (!isPasswordMatching) throw new HttpException('Wrong credentials provided.', HttpStatus.BAD_REQUEST);
  }

  getCookieForLogOut() {
    return `Authentication=; HttpOnly; Path='/'; Max-Age=0`;
  }

  getCookieWithJWTToken(userId: number) {
    const payload: TokenPayload = { userId };
    const token = this.jwt.sign(payload);

    return `Authentication=${token}; HttpOnly; Path='/'; Max-Age=${this.config.get('JWT_EXPIRE_TIME')}`;
  }

  async signUp(dto: AuthDTO) {
    try {
      const hash = await bcrypt.hash(dto.password, this.config.get('SALT_ROUNDS'));
      const createdUser = await this.prisma.user.create({ data: { email: dto.email, hash } });
      createdUser.hash = undefined;

      return createdUser;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error?.code === PrismaErrorCode.UniqueViolation) {
          throw new ForbiddenException('Credentials taken.');
        }
      }

      throw error;
    }
  }

  async signIn(dto: AuthDTO): Promise<{ access_token: string }> {
    try {
      const user = await this.prisma.user.findUnique({ where: { email: dto.email } });

      await AuthService.verifyPassword(dto.password, user.hash);

      this.logger.debug(`The user ${user.firstName} signed in.`);

      user.hash = undefined;

      return this.signToken(user.id, user.email);
    } catch (error) {
      throw new HttpException('Wrong credentials provided.', HttpStatus.BAD_REQUEST);
    }
  }

  async signToken(userId: number, email: string): Promise<{ access_token: string }> {
    const payload = { sub: userId, email };

    const access_token = await this.jwt.signAsync(payload, {
      expiresIn: this.config.get('JWT_EXPIRE_TIME'),
      secret: this.config.get('JWT_SECRET')
    });

    return { access_token };
  }
}
