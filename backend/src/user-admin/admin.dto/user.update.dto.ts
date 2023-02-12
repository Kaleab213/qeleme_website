import { IsOptional, IsString,IsEmail } from 'class-validator';
export class UserUpdate{
    @IsString()
    @IsOptional()
    fname?: string;
    @IsString()
    @IsOptional()
    lname?: string;

@IsString()
@IsOptional()
username?: string;
@IsEmail()
@IsOptional()
email?: string;
}


