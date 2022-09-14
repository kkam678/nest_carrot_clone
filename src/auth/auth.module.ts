import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { UserTown } from '../user/entities/user-town.entity';
import { Town } from '../town/entities/town.entity';
import { UserService } from '../user/user.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        TypeOrmModule.forFeature([User, UserTown, Town]),
    ],
    controllers: [AuthController],
    providers: [UserService, AuthService],
})
export class AuthModule {}
