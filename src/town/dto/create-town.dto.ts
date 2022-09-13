import { IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateTownDto {
    @IsString()
    @MaxLength(50)
    name: string;
}
