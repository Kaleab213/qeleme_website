import { Module } from '@nestjs/common';
import { UserAuthService } from './user.service';


import { PrismaModule } from '../prisma/prisma.module';
import { AtStrategy } from './Strategies';
import { RtStrategy } from './Strategies/rt.strategy';
import { JwtModule } from '@nestjs/jwt/dist';
import { ConfigModule, ConfigService } from '@nestjs/config/dist';
import { UserAuthController } from './user.controller';


@Module({
  imports: [ConfigModule.forRoot({   isGlobal: true,}),JwtModule.register({}),PrismaModule],

  controllers: [UserAuthController],
  providers: [UserAuthService,AtStrategy,RtStrategy,ConfigService]
})
export class UserAuthModule {}
