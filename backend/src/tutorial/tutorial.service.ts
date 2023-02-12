import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { UpdateTutorialDto } from './dto/update-tutorial.dto';


@Injectable()
export class TutorialService {
  constructor(private prisma: PrismaService) {}

  getTutorial(userId: number) {
    return this.prisma.tutorial.findMany({
      where: {
        userId,
      },
    });
  }

  getTutorialById(
    userId: number,
    tutorId: number,
  ) {
    return this.prisma.tutorial.findFirst({
      where: {
        id: tutorId,
        userId,
      },
    });
  }

  async createTutor(
    userId: number,
    dto: CreateTutorialDto,
  ) {
    const tutorial = await this.prisma.tutorial.create({
        data: {
          userId,
          ...dto,
        },
      });

    return tutorial;
  }

  async Updatetutor(
    userId: number,
    tutorId: number,
    dto: UpdateTutorialDto,
  ) {
    // get the bookmark by id
    const tutorial = await this.prisma.tutorial.findUnique({
        where: {
          id: tutorId,
        },
      });

    // check if user owns the bookmark
    if (!tutorial || tutorial.userId !== userId)
      throw new ForbiddenException(
        'Access to resources denied',
      );

    return this.prisma.tutorial.update({
      where: {
        id: tutorId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deletetutor(
    userId: number,
    tutorId: number,
  ) {
    const tutorial = await this.prisma.tutorial.findUnique({
        where: {
          id: tutorId,
        },
      });

    // check if user owns the bookmark
    if (!tutorial || tutorial.userId !== userId)
      throw new ForbiddenException( 'Access to resources denied', );

    await this.prisma.tutorial.delete({
      where: {
        id: tutorId,
      },
    });
  }
  async Logout(id:number){
    await this.prisma.user.updateMany({
      where:{id,referesh_password:{
        not:null
      }},
      data:{
        referesh_password:null
      }

    })

  }
}