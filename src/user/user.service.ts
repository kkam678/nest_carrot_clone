import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Town } from '../town/entities/town.entity';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserTown } from './entities/user-town.entity';
import { User } from './entities/user.entity';
import * as jwt from 'jsonwebtoken';
import authConfig from '../config/authConfig';
import { ConfigType } from '@nestjs/config';
import { Auth } from '../auth/entities/auth.entity';
import { access } from 'fs';

@Injectable()
export class UserService {
    constructor(
        private dataSource: DataSource,
        @Inject(authConfig.KEY) private config: ConfigType<typeof authConfig>,
        @InjectRepository(User) private userRepo: Repository<User>,
        @InjectRepository(UserTown) private userTownRepo: Repository<UserTown>,
        @InjectRepository(Town) private townRepo: Repository<Town>,
    ) {}
    async create(createUserDto: CreateUserDto) {
        //TODO:: 인증번호 체크 로직 실제 문자 전송 가능할때 구현,
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        const town = await this.townRepo.findOne({ where: { name: createUserDto.town.name } });

        try {
            //요청받은 유저동네가 저장되지 않은 신규 동네라면 town테이블에 저장
            if (town === null) {
                const town = new Town();
                town.name = createUserDto.town.name;
                await queryRunner.manager.save(town);
            }
            //유저 저장
            const user = new User();
            user.phone = createUserDto.phone;
            const savedUser = await queryRunner.manager.save(user);

            //유저 동네 저장
            const userTown = new UserTown();
            userTown.townId = town.id;
            userTown.userId = savedUser.id;
            await queryRunner.manager.save(userTown);
            await queryRunner.commitTransaction();
            const payload = { ...savedUser };
            const accessToken = jwt.sign(payload, this.config.jwtSecret);
            return new Auth({
                accessToken: accessToken,
            });
        } catch (err) {
            console.log(err);
            // since we have errors lets rollback the changes we made
            await queryRunner.rollbackTransaction();
        } finally {
            // you need to release a queryRunner which was manually instantiated
            await queryRunner.release();
        }
    }

    findAll() {
        return `This action returns all user`;
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
