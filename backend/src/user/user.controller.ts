import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';

import { UserAuthService } from './user.service';
import { UserDto } from './dto/create-user.dto';


@Controller('auth')
export class UserAuthController {
  constructor(private authService: UserAuthService) {}

  @Post('signup')
  signup(@Body() dto: UserDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signin(@Body() dto: UserDto) {
    return this.authService.signin(dto);
  }
}