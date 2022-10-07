import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { ListModule } from './list/list.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
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
    AuthModule,
    ListModule,
    PrismaModule,
    UserModule
  ]
})
export class AppModule {}
