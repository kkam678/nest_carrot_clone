import { Exclude } from 'class-transformer';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('user_social')
export class UserSocial {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'user_id' })
    userId: number;

    @Column({ length: 10 })
    type: string;

    @Exclude()
    @Column({ length: 300 })
    code: string;

    @Column({ length: 30 })
    name: string;

    @Column({ length: 50 })
    nickname: string;

    @Column({ name: 'email', length: 300 })
    email: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    public createdAt: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    public updatedAt: Date;
}
