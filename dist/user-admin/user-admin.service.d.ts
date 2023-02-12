import { PrismaService } from '../prisma/prisma.service';
import { UserUpdate } from './admin.dto/user.update.dto';
export declare class UserAdminService {
    private prisma;
    constructor(prisma: PrismaService);
    userUpdate(userId: number, updateDto: UserUpdate): Promise<import(".prisma/client").User>;
}
