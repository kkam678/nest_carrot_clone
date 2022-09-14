import { IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

export class CreateAuthDto {
    @IsString()
    @MinLength(10)
    @MaxLength(11)
    phone: string;

    @IsString()
    @MinLength(6)
    @MaxLength(6)
    authNumber: string;
}
