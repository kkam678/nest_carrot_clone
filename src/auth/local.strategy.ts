import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: 'phone',
            passwordField: 'authNumber',
        });
    }

    async validate(phone: string, authNumber: string): Promise<any> {
        const user = await this.authService.validateUser(phone, authNumber);
        if (!user) {
            throw new UnauthorizedException();
        }
        return this.authService.login(user);
    }
}
