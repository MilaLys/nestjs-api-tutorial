import * as Joi from 'joi';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Test } from '@nestjs/testing';

import { AuthService } from '../auth.service';
import { PrismaModule } from '../../prisma/prisma.module';
import { UserService } from '../../user/user.service';

describe('The AuthService', () => {
  let authService: AuthService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        PrismaModule,
        ConfigModule.forRoot({
          validationSchema: Joi.object({
            API_PORT: Joi.number().required(),
            DATABASE_URL: Joi.string().required(),
            JWT_EXPIRE_TIME: Joi.string().required(),
            JWT_SECRET: Joi.string().required(),
            POSTGRES_DB: Joi.string().required(),
            POSTGRES_PASSWORD: Joi.string().required(),
            POSTGRES_USER: Joi.string().required()
          })
        }),
        JwtModule.registerAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => ({
            secret: configService.get('JWT_SECRET'),
            signOptions: {
              expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`
            }
          })
        })
      ],
      providers: [AuthService, UserService]
    }).compile();
    authService = await module.get<AuthService>(AuthService);
  });

  describe('when creating a cookie', () => {
    it('should return a string', () => {
      const userId = 1;
      expect(typeof authService.getCookieWithJWTToken(userId)).toEqual('string');
    });
  });
});
