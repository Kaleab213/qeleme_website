import { User } from './../../node_modules/.prisma/client/index.d';
import { UserAdminService } from './user-admin.service';
import { UserUpdate } from './admin.dto/user.update.dto';
export declare class UserAdminController {
    private adminService;
    constructor(adminService: UserAdminService);
    getUser(username: string): string;
    updateUser(userId: number, updateDto: UserUpdate): Promise<User>;
}
