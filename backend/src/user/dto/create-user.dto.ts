import { IsString ,IsNotEmpty} from "class-validator";


export class UserDto {
    fname?: string;
    lname?: string;
    email?: string;
    @IsNotEmpty()
    @IsString()
    username: string;
    @IsNotEmpty()
    @IsString()
    password:string;
   
    
   
    
}
