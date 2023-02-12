import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TutorialModule } from './tutorial/tutorial.module';

import { UserAuthModule} from './user/user.module';
import { UserAdminModule } from './user-admin/user-admin.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TutorialModule, UserAuthModule, UserAdminModule,ConfigModule.forRoot({isGlobal:true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
