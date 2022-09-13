import { Type } from 'class-transformer';
import { IsString, MaxLength, MinLength, ValidateNested } from 'class-validator';
import { CreateTownDto } from '../../town/dto/create-town.dto';

export class CreateUserDto {
    @IsString()
    @MinLength(10)
    @MaxLength(11)
    phone: string;

    @IsString()
    @MinLength(6)
    @MaxLength(6)
    authNumber: string;

    @Type(() => CreateTownDto)
    @ValidateNested()
    town: CreateTownDto;
}
