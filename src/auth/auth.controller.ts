import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    Headers,
    Req,
} from '@nestjs/common';
import { AuthGuard } from '../auth.guard';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) {}

    @Post()
    async create(@Body() createAuthDto: CreateAuthDto) {
        const user = await this.userService.findOne(createAuthDto.phone);
        return this.authService.create(user);
    }

    @UseGuards(AuthGuard)
    @Get()
    authCheck(@Headers() headers: any, @Req() req) {
        console.log(req.user);
        return this.authService.authCheck();
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
        return this.authService.update(+id, updateAuthDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.authService.remove(+id);
    }
}
