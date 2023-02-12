import { UserAuthService } from './user.service';
import { UserDto } from './dto/create-user.dto';
export declare class UserAuthController {
    private authService;
    constructor(authService: UserAuthService);
    signup(dto: UserDto): Promise<{
        access_token: string;
    }>;
    signin(dto: UserDto): Promise<{
        access_token: string;
    }>;
}
