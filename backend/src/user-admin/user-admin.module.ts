import { Module } from '@nestjs/common';
import { UserAdminService } from './user-admin.service';
import { UserAdminController } from './user-admin.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { ConfigModule } from '@nestjs/config/dist';
import { UserAuthModule } from 'src/user/user.module';

@Module({
  imports :[ConfigModule.forRoot({   isGlobal: true,}), PrismaModule,UserAuthModule],
  providers: [UserAdminService],
  controllers: [UserAdminController]
})
export class UserAdminModule {}
