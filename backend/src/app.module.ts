import { Module } from '@nestjs/common';

import { TutorialModule } from './tutorial/tutorial.module';

import { UserAuthModule} from './user/user.module';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TutorialModule, UserAuthModule, ConfigModule.forRoot({isGlobal:true})],
  
})
export class AppModule {}
