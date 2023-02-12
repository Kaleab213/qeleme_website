import { PartialType } from '@nestjs/mapped-types';
import { CreateTutorialDto } from './create-tutorial.dto';
import { IsString } from 'class-validator';

export class UpdateTutorialDto extends PartialType(CreateTutorialDto) {
    @IsString()
    Title?: string;
    @IsString()
    Grade?: string;
    @IsString()
    Subject?: string;
    @IsString()
    Content?: string;
    @IsString()
    Link?:string;
}
