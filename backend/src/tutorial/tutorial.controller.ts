
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';


import { TutorialService } from './tutorial.service';
import { UserDecoratorId } from '../user/decorators/userDecorator.id';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { UpdateTutorialDto } from './dto/update-tutorial.dto';
import { AtGuards } from '../user/guard/at.guard';


@Controller('tutorial')
export class TutorialController {
  constructor(
    private tutorialService: TutorialService) {}

  @Get()
  getTutorial(@UserDecoratorId() userId: number) {
    return this.tutorialService.getTutorial(
      userId,
    );
  }

  @Get(':id')
  getTutorialById(
    @UserDecoratorId() userId: number,
    @Param('id', ParseIntPipe) tutorId: number,
  ) {
    return this.tutorialService.  getTutorialById(
      userId,
      tutorId,
    );
  }
  @UseGuards(AtGuards)
  @Post()
  createTutor(
    @UserDecoratorId('id') userId: number,
    @Body() dto: CreateTutorialDto,
  ) {
    return this.tutorialService.createTutor(
      userId,
      dto,
    );
  }
  @UseGuards(AtGuards)
  @Patch(':id')
  Updatetutor(
    @UserDecoratorId('id') userId: number,
    @Param('id', ParseIntPipe) tutorId: number,
    @Body() dto: UpdateTutorialDto,
  ) {
    return this.tutorialService.Updatetutor(
      userId,
      tutorId,
      dto,
    );
  }
  @UseGuards(AtGuards)
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deletetutor(
    @UserDecoratorId('id') userId: number,
    @Param('id', ParseIntPipe) tutorId: number,
  ) {
    return this.tutorialService.deletetutor(
      userId,
     tutorId,
    );
  }
}