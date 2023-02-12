
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor(){
        super({
            datasources:{
                db:{
                    url:'mysql://root:deribewsoftware@localhost:3306/qelemeacademy?schema=public'
                }
            }
        });
    }




   async onModuleInit() {
    await this.$connect();
        
    }
    async onModuleDestroy() {
        await this.$disconnect();
}
}