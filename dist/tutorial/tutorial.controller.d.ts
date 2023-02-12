import { TutorialService } from './tutorial.service';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { UpdateTutorialDto } from './dto/update-tutorial.dto';
export declare class TutorialController {
    private tutorialService;
    constructor(tutorialService: TutorialService);
    getTutorial(userId: number): import(".prisma/client").PrismaPromise<import(".prisma/client").Tutorial[]>;
    getTutorialById(userId: number, tutorId: number): import(".prisma/client").Prisma.Prisma__TutorialClient<import(".prisma/client").Tutorial, never>;
    createTutor(userId: number, dto: CreateTutorialDto): Promise<import(".prisma/client").Tutorial>;
    Updatetutor(userId: number, tutorId: number, dto: UpdateTutorialDto): Promise<import(".prisma/client").Tutorial>;
    deletetutor(userId: number, tutorId: number): Promise<void>;
}
