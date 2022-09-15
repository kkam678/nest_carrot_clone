import { BadRequestException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as jwt from 'jsonwebtoken';
import authConfig from '../config/authConfig';
import { ConfigType } from '@nestjs/config';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { Auth } from './entities/auth.entity';
@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        @Inject(authConfig.KEY) private config: ConfigType<typeof authConfig>,
    ) {}

    async validateUser(phone: string, authNumber: string): Promise<any> {
        //TODO:: 유저 인증번호 체크 로직 추가해야함
        const user = await this.userService.findOne(phone);
        if (user) {
            const { ...result } = user;
            console.log(result);
            return result;
        }
        return null;
    }

    // 로그인 기능이 추가되었다.
    async login(user: any) {
        const payload = { username: user.phone, sub: user.id };
        return new Auth(this.jwtService.sign(payload));
    }

    verify(jwtString: string) {
        try {
            const payload = jwt.verify(jwtString, this.config.jwtSecret) as (
                | jwt.JwtPayload
                | string
            ) &
                User;

            const { id } = payload;

            return {
                userId: id,
            };
        } catch (e) {
            throw new UnauthorizedException();
        }
    }

    authCheck() {
        return `This action returns all auth`;
    }

    update(id: number, updateAuthDto: UpdateAuthDto) {
        return `This action updates a #${id} auth`;
    }

    remove(id: number) {
        return `This action removes a #${id} auth`;
    }
}
