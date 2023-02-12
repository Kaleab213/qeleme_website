import { User } from './../../node_modules/.prisma/client/index.d';


import { Controller, Patch, Body, Get, UseGuards, Req } from '@nestjs/common';
import { UserAdminService } from './user-admin.service';

import { UserUpdate } from './admin.dto/user.update.dto';
import { UserDecoratorId } from '../user/decorators/userDecorator.id';
import { AtGuards } from '../user/guard/at.guard';
import { Request } from 'express';


@Controller('user-admin')
export class UserAdminController {
    constructor(private adminService:UserAdminService){}

    @UseGuards(AtGuards)

    @Get('me')
    getUser(@UserDecoratorId('username')  username:string){
        
       
        
        console.log(username);
        return username;


    }

    @Patch()
    updateUser(@UserDecoratorId('id') userId: number, @Body() updateDto: UserUpdate) {
        return this.adminService. userUpdate(userId, updateDto);
    }
}
