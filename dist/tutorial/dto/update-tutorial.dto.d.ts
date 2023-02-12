import { CreateTutorialDto } from './create-tutorial.dto';
declare const UpdateTutorialDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTutorialDto>>;
export declare class UpdateTutorialDto extends UpdateTutorialDto_base {
    Title?: string;
    Grade?: string;
    Subject?: string;
    Content?: string;
    Link?: string;
}
export {};
