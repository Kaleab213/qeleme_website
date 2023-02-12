import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UserUpdate } from './admin.dto/user.update.dto';

@Injectable()
export class UserAdminService {
    constructor( private prisma :PrismaService){}
   async userUpdate(userId:number,updateDto:UserUpdate){
    const user = await this.prisma.user.update({
        where: {
            id: userId,

    }, 
    data: {
        ...updateDto,
    }


   }
    )
    delete user.hash;
    return user;
}
}