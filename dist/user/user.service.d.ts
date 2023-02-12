import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UserDto } from './dto/create-user.dto';
export declare class UserAuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signup(createUserDto: UserDto): Promise<{
        access_token: string;
    }>;
    signin(dto: UserDto): Promise<{
        access_token: string;
    }>;
    signToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
}
