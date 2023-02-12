import { IsString } from 'class-validator';

export class CreateTutorialDto {

   @IsString()
   Title: string;
   @IsString()
    Grade: string;
   
    @IsString()
    Subject: string;

   
   
    @IsString()
    Content: string;
    @IsString()
    Link:string;
    
    

}
