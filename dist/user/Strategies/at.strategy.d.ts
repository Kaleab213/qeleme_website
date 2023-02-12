import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';
declare const AtStrategy_base: new (...args: any[]) => Strategy;
export declare class AtStrategy extends AtStrategy_base {
    private prisma;
    constructor(config: ConfigService, prisma: PrismaService);
    validate(payload: {
        sub: number;
        username: string;
    }): Promise<import(".prisma/client").User>;
}
export {};
