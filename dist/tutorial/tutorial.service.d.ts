import { PrismaService } from '../prisma/prisma.service';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { UpdateTutorialDto } from './dto/update-tutorial.dto';
export declare class TutorialService {
    private prisma;
    constructor(prisma: PrismaService);
    getTutorial(userId: number): import(".prisma/client").PrismaPromise<import(".prisma/client").Tutorial[]>;
    getTutorialById(userId: number, tutorId: number): import(".prisma/client").Prisma.Prisma__TutorialClient<import(".prisma/client").Tutorial, never>;
    createTutor(userId: number, dto: CreateTutorialDto): Promise<import(".prisma/client").Tutorial>;
    Updatetutor(userId: number, tutorId: number, dto: UpdateTutorialDto): Promise<import(".prisma/client").Tutorial>;
    deletetutor(userId: number, tutorId: number): Promise<void>;
    Logout(id: number): Promise<void>;
}
