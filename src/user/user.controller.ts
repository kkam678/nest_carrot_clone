import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    Req,
    Res,
    HttpCode,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '../validation.pipe';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { CreateTownDto } from 'src/town/dto/create-town.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly configService: ConfigService,
    ) {}

    @Post()
    create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findOne(@Req() req) {
        return this.userService.findOne(+req.user.userId);
    }

    @UseGuards(JwtAuthGuard)
    @Patch()
    update(@Req() req, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+req.user.userId, updateUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @HttpCode(204)
    @Delete()
    remove(@Req() req) {
        this.userService.remove(+req.user.userId);
        return null;
    }
}
