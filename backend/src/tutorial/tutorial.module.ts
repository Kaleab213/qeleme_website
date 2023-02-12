import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { TutorialService } from './tutorial.service';
import { TutorialController } from './tutorial.controller';

@Module({
  imports : [PrismaModule],
  controllers: [TutorialController],
  providers: [TutorialService]
})
export class TutorialModule {}
